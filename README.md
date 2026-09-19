<img src="https://xray-forge.github.io/xrf-book/images/xrf-xray16-sdk-banner%400.5x.png" alt="XRF X-Ray 16 SDK">

# XRF X-Ray 16 SDK

[![npm version](https://img.shields.io/npm/v/xray16)](https://www.npmjs.com/package/xray16)
[![sdk](https://img.shields.io/badge/docs-sdk-blue.svg?style=flat)](https://xray-forge.github.io/xrf-xray16-sdk/api/types/)
[![book](https://img.shields.io/badge/docs-book-blue.svg?style=flat)](https://xray-forge.github.io/xrf-book)
[![Node.js CI](https://github.com/xray-forge/xrf-xray16-sdk/actions/workflows/build_and_test.yml/badge.svg)](https://github.com/xray-forge/xrf-xray16-sdk/actions/workflows/build_and_test.yml)

`xray16` provides TypeScript declarations, test helpers, and TypeScriptToLua plugins for the Lua APIs exposed by
OpenXRay (X-Ray 16). Use it to compile XRF game scripts from TypeScript, including with
[xrf-engine](https://github.com/xray-forge/xrf-engine).

[X-Ray 16 engine API](https://xray-forge.github.io/xrf-xray16-sdk/api/types/) documents game globals, luabind classes,
UI and GOAP classes, and script objects.

## Quick start

Install the SDK and its required TypeScriptToLua peer dependency:

```sh
npm install xray16 typescript-to-lua
```

`typescript-to-lua` is the SDK's only required peer dependency and requires a compatible TypeScript version. Install
`jest`, `ts-jest`, and `typescript` when using `xray16/testing`; they are marked as optional peers so other consumers do
not need Jest. The `fengari` and `ini` dependencies used by `xray16/mocks` install automatically.

Merge the following into your `tsconfig.json` to load the declarations. Include only the ambient typedef packages your
project uses.

```jsonc
{
  "compilerOptions": {
    "types": [
      "@typescript-to-lua/language-extensions",
      "xray16",
      "xray16/typedefs/extensions",
      "xray16/typedefs/luajit",
    ],
  },
}
```

This config loads types; game builds also need the relevant [TypeScriptToLua plugins](#typescripttolua-plugins).

For an unreleased build, install `xray16@experimental` from npm, or use the rolling
[nightly GitHub release](https://github.com/xray-forge/xrf-xray16-sdk/releases/tag/nightly):

```sh
npm install https://github.com/xray-forge/xrf-xray16-sdk/releases/download/nightly/xray16-nightly.tgz
```

## Entry points

| Import              | Use it for                                                                |
| ------------------- | ------------------------------------------------------------------------- |
| `xray16`            | Engine globals, luabind classes, UI and GOAP classes, and script objects. |
| `xray16/alias`      | Readable aliases for engine declaration names and virtual engine enums.   |
| `xray16/macros`     | Compile-time helpers with a Node/Jest fallback.                           |
| `xray16/lib`        | Shared aliases, constants, and small runtime helpers.                     |
| `xray16/testing`    | Jest configuration and setup helpers.                                     |
| `xray16/mocks`      | Lua-like runtime helpers for Node-based tests.                            |
| `xray16/typedefs/*` | Opt-in ambient declarations for X-Ray and bundled Lua libraries.          |
| `xray16/plugins/*`  | TypeScriptToLua build plugins.                                            |

## Engine types and aliases

Import from `xray16` to use the engine's Lua binding names. This example checks whether a stalker or monster can see the
object under the player's crosshair:

```ts
import { type game_object, level } from "xray16";

export function isTargetVisible(npc: game_object): boolean {
  const target = level.get_target_obj();

  return target !== null && npc.see(target);
}
```

Use `xray16/alias` for TypeScript-style names such as `GameObject` and `Vector`.

```ts
import type { GameObject, ServerObject, Vector } from "xray16/alias";

export interface SpawnPoint {
  object: ServerObject;
  position: Vector;
  owner: GameObject;
}
```

Type aliases are erased at build time. Virtual enums are compile-time declarations folded by the `inline` plugin in game
builds; Jest and Node can import their runtime objects from `xray16/alias`.

## Macros and shared helpers

Use macros for operations that should be replaced during Lua compilation but still run under Jest or Node.

```ts
import { $filename, $fromObject, $isNil } from "xray16/macros";

export function readConfig(value: Record<string, string> | null | undefined): LuaTable<string, string> {
  if ($isNil(value)) {
    return $fromObject<string, string>({ source: $filename });
  }

  return $fromObject(value);
}
```

The `macros` plugin removes the import and replaces helper usage in game builds. The shipped runtime module supports the
same imports under Jest and Node, but `$filename` and `$dirname` return placeholder strings there. Table conversions
such as `$fromObject` require the Lua-like globals installed by the [test setup](#test-x-ray-code-under-node).

`xray16/lib` provides shared aliases, constants, and utility helpers:

```ts
import { MAX_U16, clamp, type TSection } from "xray16/lib";

export function normalizeSection(section: TSection, value: number): string {
  return `${section}:${clamp(value, 0, MAX_U16)}`;
}
```

Type aliases are erased at build time. The `inline` plugin can fold `@inline` constants and helpers such as `clamp`.
Runtime helpers such as `round` and `range` need a Lua module in game builds. Follow the
[`libcompile` setup](docs/plugins/libcompile.md#setup) to map `xray16/lib` to its TypeScript source and emit an
`xray_bundle` Lua module.

## Test X-Ray code under Node

`createJestConfig()` returns a `ts-jest` configuration that maps bare `xray16` imports to the SDK runtime stand-in.

```js
// jest.config.cjs
const { createJestConfig } = require("xray16/testing");

module.exports = createJestConfig({
  roots: ["<rootDir>/src"],
  moduleNameMapper: { "^@/(.*)": "<rootDir>/src/$1" },
});
```

It installs Lua-like globals and the `xray16` module mock before each test file, then registers Jest matchers such as
`toBeNil`, `toEqualLuaTables`, and `toEqualLuaArrays`. Add `xray16/typedefs/jest` to `compilerOptions.types` to
type-check those matchers.

Consumer `moduleNameMapper` entries override SDK entries with the same key. Consumer `setupFiles` and
`setupFilesAfterEnv` entries run after the SDK entries in their respective setup phases; other top-level options replace
their defaults.

For a custom setup, call `setupLuaGlobals()` from `xray16/testing`. Import `setupXrayRuntime()` only from a Jest setup
file or test setup module, not from the Jest config file: its module eagerly loads the Jest-dependent mock runtime. The
helper calls `jest.mock` to register engine exports.

```ts
import { setupLuaGlobals } from "xray16/testing";
import { setupXrayRuntime } from "xray16/testing/setup-xray-runtime";

setupLuaGlobals();
setupXrayRuntime({
  editor: jest.fn(() => true),
});
```

Jest mock helpers are available from `xray16/testing/utils`:

```ts
import { replaceFunctionMock, resetFunctionMock } from "xray16/testing/utils";
```

## Ambient typedefs

Ambient typedefs describe X-Ray globals and bundled Lua libraries. They are not modules to import; add them to
`compilerOptions.types` or reference them with `/// <reference types="..." />`.

| Typedef                      | Provides                                                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `xray16/typedefs/extensions` | OpenXRay `table` and `string` extensions, including `table.random`, `table.size`, and `string.trim` variants. |
| `xray16/typedefs/luajit`     | LuaJIT globals and methods missing from the default TSTL typings.                                             |
| `xray16/typedefs/lfs`        | LuaFileSystem (`lfs`).                                                                                        |
| `xray16/typedefs/marshal`    | `marshal` serialization helpers.                                                                              |
| `xray16/typedefs/jest`       | Types for the custom Jest matchers.                                                                           |

## TypeScriptToLua plugins

Plugins are opt-in. Merge the transformations your game build needs into `tstl.luaPlugins`, preserving the following
order:

```jsonc
{
  "tstl": {
    "luaPlugins": [
      { "name": "xray16/plugins/luabind" },
      { "name": "xray16/plugins/strip" },
      { "name": "xray16/plugins/macros" },
      { "name": "xray16/plugins/optimize" },
      { "name": "xray16/plugins/inline" },
      { "name": "xray16/plugins/libcompile" },
      { "name": "xray16/plugins/tracy" },
    ],
  },
}
```

| Plugin                                     | Purpose                                                                               |
| ------------------------------------------ | ------------------------------------------------------------------------------------- |
| [`luabind`](docs/plugins/luabind.md)       | Emits `class("Name")` declarations for `@LuabindClass()` classes.                     |
| [`strip`](docs/plugins/strip.md)           | Removes engine declaration imports and optionally `LuaLogger` declarations and calls. |
| [`macros`](docs/plugins/macros.md)         | Folds filename, dirname, nil-check, cast, and build-header helpers.                   |
| [`optimize`](docs/plugins/optimize.md)     | Rewrites returned ternaries into direct Lua `if` / `else` returns.                    |
| [`inline`](docs/plugins/inline.md)         | Inlines tagged constants, functions, and `$inline` / `$noInline` hints.               |
| [`libcompile`](docs/plugins/libcompile.md) | Emits `xray16/lib` source as a flat `xray_bundle` module.                             |
| [`tracy`](docs/plugins/tracy.md)           | Injects Tracy profiler zones when enabled.                                            |

Logger removal and Tracy instrumentation are disabled by default. When their config fields are unset, `strip.luaLogger`
is enabled by `XR_NO_LUA_LOGS=true` or `--no-lua-logs`, and `tracy.enabled` is enabled by `XR_INJECT_TRACY_ZONES=true`
or `--inject-tracy-zones`. An explicit config value takes precedence.

Classes that extend C++ objects need luabind registration rather than default TypeScriptToLua prototype output:

```ts
import { type cse_alife_object, LuabindClass, object_binder } from "xray16";

@LuabindClass()
export class ActorBinder extends object_binder {
  public override net_spawn(object: cse_alife_object): boolean {
    return super.net_spawn(object);
  }
}
```

See the [`luabind` plugin guide](docs/plugins/luabind.md) for constructor and inheritance rules.

## API documentation and development

The [SDK documentation website](https://xray-forge.github.io/xrf-xray16-sdk/index.html) contains guides, plugin pages,
and generated API references for the package entry points. Declarations describe the TypeScript-visible API; C++ engine
bindings define runtime behavior. Check the engine source when declaration syntax is ambiguous.

To refresh local binding dumps, run OpenXRay with `-dump_bindings`, open the generated `ScriptBindings_*.txt` files in
the user data directory (`$app_data_root$`), and compare them with this package's declarations.

To work on the SDK, use Node.js and run `npm ci` from the repository root. Then run the checks and builds you need:

```sh
npm run typecheck
npm run lint
npm run test
npm run build
npm run docs
```

`npm run build` stages the publishable package in `target/pkg/xray16`. `npm run docs` builds the VitePress website,
including the TypeDoc API reference, into `target/docs`; `npm run docs:dev` serves it locally.

Website content lives in `docs/`, build and tooling configuration in `cli/`, and the published manifest is
[`src/package.json`](src/package.json).
