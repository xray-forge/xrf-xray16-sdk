import { beforeAll, describe, expect, it, jest } from "@jest/globals";

import { mockString } from "../../mocks/lua/mock-lua-string";
import { mockToString } from "../../mocks/lua/mock-lua-tostring";
import { mockType } from "../../mocks/lua/mock-lua-type";
import { MockLuaTable } from "../../mocks/mock-lua-table";

import { stringifyKey, toJSON } from "./json";

// JSON utils walk values with the Lua `pairs`, `type` and `tostring` globals; provide the mocks before the specs run.
beforeAll(() => {
  (globalThis as Record<string, unknown>).string = mockString;
  (globalThis as Record<string, unknown>).tostring = mockToString;
  (globalThis as Record<string, unknown>).type = mockType;
  (globalThis as Record<string, unknown>).pairs = (value: object) => Object.entries(value);
  (globalThis as Record<string, unknown>).LuaTable = MockLuaTable;
});

describe("toJSON", () => {
  it("should correctly stringify simple types", () => {
    expect(toJSON("abc")).toBe('"abc"');
    expect(toJSON(123)).toBe("123");
    expect(toJSON(true)).toBe("true");
    expect(toJSON(false)).toBe("false");
    expect(toJSON(null)).toBe('"<nil>"');
    expect(toJSON(undefined)).toBe('"<nil>"');
  });

  it("should correctly stringify tables", () => {
    expect(toJSON({})).toBe("{}");
    expect(toJSON({ a: 10 })).toBe('{"a": 10}');
    expect(toJSON({ b: "ab", c: 5, d: false, e: null })).toBe('{"b": "ab", "c": 5, "d": false, "e": "<nil>"}');
    expect(toJSON({ a: 10, b: { c: 1234 } })).toBe('{"a": 10, "b": {"c": 1234}}');
  });

  it("should correctly stringify circular references", () => {
    const base = { nested: { circular: {} } };

    base.nested.circular = base;

    expect(toJSON(base)).toBe('{"nested": {"circular": "<circular_reference>"}}');
  });

  it("should correctly limit depth", () => {
    const base = { nested: { nested: { nested: { nested: {} } } } };

    expect(toJSON(base, " ", 0, 3)).toBe('{"nested": {"nested": {"nested": {"nested": "<depth_limit>"}}}}');
    expect(toJSON(base, " ", 0, 0)).toBe('{"nested": "<depth_limit>"}');
  });

  it("should correctly transform unusual non-table values", () => {
    expect(toJSON(() => {})).toBe('"<function>"');

    jest.spyOn(globalThis as unknown as { type: typeof mockType }, "type").mockReturnValueOnce("userdata");
    expect(toJSON({})).toBe('"<userdata>"');

    jest.spyOn(globalThis as unknown as { type: typeof mockType }, "type").mockReturnValueOnce("thread");
    expect(toJSON({})).toBe('"<unknown>"');
  });
});

describe("stringifyKey", () => {
  it("should correctly stringify json keys", () => {
    expect(stringifyKey(123)).toBe("123");
    expect(stringifyKey("abc")).toBe("abc");
    expect(stringifyKey(true)).toBe("<k_boolean>");
    expect(stringifyKey(() => {})).toBe("<k_function>");
  });
});
