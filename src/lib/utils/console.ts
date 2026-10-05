import { get_console } from "xray16";
import { $isNotNil } from "xray16/macros";

import { type TName } from "../scalars";
import { type AnyArgs } from "../types";

/**
 * Execute console command and concatenate provided parameters for propagation.
 *
 * @param command - Console command.
 * @param args - List of arguments to provide for command.
 */
export function executeConsoleCommand(command: TName, ...args: AnyArgs): void {
  get_console().execute(args.length > 0 ? `${command} ${table.concat(args, " ")}` : command);
}

/**
 * Execute command to get floating point number value.
 *
 * @param command - Console command.
 * @param args - List of arguments to provide for command.
 * @returns Float value from console.
 */
export function getConsoleFloatCommand<T extends number = number>(command: TName, ...args: AnyArgs): T {
  return get_console().get_float(args.length > 0 ? `${command} ${table.concat(args, " ")}` : command) as T;
}

/**
 * Whether the running engine registers a console command. Many debug commands exist only outside gold builds, and
 * `ai_dbg_*` only in Debug and Mixed ones.
 *
 * @param command - Console command name.
 * @returns Whether the console knows the command.
 */
export function isConsoleCommandAvailable(command: TName): boolean {
  return $isNotNil(get_console().get_string(command));
}
