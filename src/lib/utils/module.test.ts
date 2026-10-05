import { afterEach, beforeEach, describe, expect, it, jest } from "@jest/globals";

import { type AnyObject } from "../types";

import { requireFresh } from "./module";

jest.mock("test.fresh_module", () => ({ value: 1 }), { virtual: true });

describe("requireFresh", () => {
  const globals: AnyObject = globalThis as AnyObject;

  beforeEach(() => {
    globals._G = globalThis;
    globals.package = { loaded: { "test.fresh_module": { stale: true } } };
  });

  afterEach(() => {
    delete globals.package;
  });

  it("should drop the cached module and require it again", () => {
    expect(requireFresh("test.fresh_module")).toEqual({ value: 1 });
    expect(globals.package.loaded["test.fresh_module"]).toBeNull();
  });
});
