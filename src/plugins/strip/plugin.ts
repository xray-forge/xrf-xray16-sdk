import {
  type CallExpression,
  factory,
  type Identifier,
  isIdentifier,
  isPropertyAccessExpression,
  isVariableDeclaration,
  type Node,
  SymbolFlags,
  SyntaxKind,
  type Type,
  type TypeChecker,
  TypeFlags,
  type VariableDeclaration,
  type VariableDeclarationList,
} from "typescript";
import { createNilLiteral, type Plugin } from "typescript-to-lua";

import { createErrorDiagnosticFactory } from "../utils/diagnostics";
import { isLuaLoggerEnabled } from "../utils/environment";

const LUA_LOGGER_STRIP_TARGET: string = "LuaLogger";
const ENGINE_MODULES: Array<string> = ["xray16", "xray16/alias"];

const createLuaLoggerResultUsageError = createErrorDiagnosticFactory(
  "LuaLogger call result cannot be used when Lua logs are stripped, the call is removed."
);
const createLuaLoggerReferenceError = createErrorDiagnosticFactory(
  "LuaLogger variable cannot be referenced outside logger calls when Lua logs are stripped, its declaration is removed."
);

/**
 * Check whether a module specifier text (quotes included) points at a type-only engine module.
 *
 * @param moduleSpecifier - Module specifier node text, e.g. `"xray16/alias"`.
 * @returns Whether the module has no Lua runtime counterpart and its require can be dropped.
 */
function isEngineModule(moduleSpecifier: string): boolean {
  return ENGINE_MODULES.includes(moduleSpecifier.slice(1, -1));
}

/**
 * @param type - Type to check.
 * @returns Whether the type is `LuaLogger`, which log stripping removes.
 */
function isLuaLoggerType(type: Type): boolean {
  return type.symbol?.name === LUA_LOGGER_STRIP_TARGET;
}

/**
 * @param node - Call to check.
 * @param checker - Program type checker.
 * @returns Whether the call is a method call on a `LuaLogger` variable, e.g. `logger.info("message")`.
 */
function isLuaLoggerCall(node: CallExpression, checker: TypeChecker): boolean {
  return (
    isPropertyAccessExpression(node.expression) &&
    isIdentifier(node.expression.expression) &&
    isLuaLoggerType(checker.getTypeAtLocation(node.expression.expression))
  );
}

/**
 * @param node - Identifier to check.
 * @param checker - Program type checker.
 * @returns Whether the identifier names a `LuaLogger` variable, whose declaration log stripping removes.
 */
function isStrippedLuaLoggerReference(node: Identifier, checker: TypeChecker): boolean {
  let symbol = checker.getSymbolAtLocation(node);

  if (symbol && symbol.flags & SymbolFlags.Alias) {
    symbol = checker.getAliasedSymbol(symbol);
  }

  return (
    isLuaLoggerType(checker.getTypeAtLocation(node)) &&
    (symbol?.declarations ?? []).some((it: Node) => isVariableDeclaration(it))
  );
}

/**
 * Configuration for the strip plugin, provided verbatim from the tsconfig `luaPlugins` entry.
 */
export interface IStripPluginConfig {
  /**
   * Remove `LuaLogger` declarations and calls from the runtime.
   * When unset, falls back to the `XR_NO_LUA_LOGS` env variable / `--no-lua-logs` CLI flag.
   */
  luaLogger?: boolean;
  /**
   * Remove imports and star re-exports of engine typedef modules (`xray16`, `xray16/alias`), which have no
   * runtime Lua counterpart and would otherwise emit dangling `require` calls. Defaults to `true`.
   */
  engineImports?: boolean;
}

/**
 * Create a plugin that strips selected constructs from the emitted Lua based on configuration.
 *
 * @param config - Selection of what should be stripped.
 * @returns Configured TypeScriptToLua plugin.
 */
export function createPlugin(config: IStripPluginConfig = {}): Plugin {
  const shouldStripLuaLogger = (): boolean => config.luaLogger ?? !isLuaLoggerEnabled();
  const shouldStripEngineImports: boolean = config.engineImports ?? true;

  return {
    visitors: {
      [SyntaxKind.ImportDeclaration]: (node, context) => {
        if (shouldStripEngineImports && isEngineModule(node.moduleSpecifier.getText())) {
          return undefined;
        }

        return context.superTransformStatements(node);
      },
      [SyntaxKind.ExportDeclaration]: (node, context) => {
        // Re-exports of type-only engine modules (e.g. `export * from "xray16/alias"`) emit a runtime
        // require loop with no counterpart Lua module; drop them.
        if (
          shouldStripEngineImports &&
          node.moduleSpecifier !== undefined &&
          isEngineModule(node.moduleSpecifier.getText())
        ) {
          return undefined;
        }

        return context.superTransformStatements(node);
      },
      [SyntaxKind.VariableStatement]: (statement, context) => {
        if (shouldStripLuaLogger()) {
          let elementsCount: number = 0;
          const list = statement.declarationList as VariableDeclarationList;
          const nodes: Array<VariableDeclaration> = [];

          list.forEachChild((it: Node) => {
            const checker: TypeChecker = context.program.getTypeChecker();
            const typeSymbol: Type = checker.getTypeAtLocation(it);

            if (typeSymbol.symbol?.name === LUA_LOGGER_STRIP_TARGET) {
              // Nothing
            } else {
              nodes.push(it as VariableDeclaration);
            }

            elementsCount += 1;
          });

          if (nodes.length === 0) {
            return undefined;
          } else if (nodes.length !== elementsCount) {
            return context.superTransformStatements(
              factory.createVariableStatement(statement.modifiers, factory.updateVariableDeclarationList(list, nodes))
            );
          }
        }

        return context.superTransformStatements(statement);
      },
      [SyntaxKind.ExpressionStatement]: (statement, context) => {
        if (
          shouldStripLuaLogger() &&
          statement.expression?.kind === SyntaxKind.CallExpression &&
          isLuaLoggerCall(statement.expression as CallExpression, context.program.getTypeChecker())
        ) {
          return undefined;
        }

        return context.superTransformStatements(statement);
      },
      // Logger calls outside statements, e.g. `return logger.info(...)` or `() => logger.info(...)`, keep the
      // surrounding code valid as `nil`; a call whose result is actually used cannot be stripped.
      [SyntaxKind.CallExpression]: (node, context) => {
        const checker: TypeChecker = context.program.getTypeChecker();

        if (shouldStripLuaLogger() && isLuaLoggerCall(node, checker)) {
          if (!(checker.getTypeAtLocation(node).flags & (TypeFlags.Void | TypeFlags.Undefined))) {
            context.diagnostics.push(createLuaLoggerResultUsageError(node));
          }

          return createNilLiteral(node);
        }

        return context.superTransformExpression(node);
      },
      [SyntaxKind.Identifier]: (node, context) => {
        if (shouldStripLuaLogger() && isStrippedLuaLoggerReference(node, context.program.getTypeChecker())) {
          context.diagnostics.push(createLuaLoggerReferenceError(node));
        }

        return context.superTransformExpression(node);
      },
    },
  };
}
