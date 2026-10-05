import { beforeAll, describe, expect, it } from "@jest/globals";

import { mockMath } from "../../mocks/lua/mock-lua-math";
import { mockString } from "../../mocks/lua/mock-lua-string";
import { MockLuaTable } from "../../mocks/mock-lua-table";
import { extendJest } from "../../testing/extend-jest";

import { containsSubstring, wrapText } from "./string";

// String utils call the Lua `string` and `math` globals and build Lua tables; provide the mocks before the specs run.
beforeAll(() => {
  (globalThis as Record<string, unknown>).string = mockString;
  (globalThis as Record<string, unknown>).math = mockMath;
  (globalThis as Record<string, unknown>).LuaTable = MockLuaTable;
  extendJest();
});

describe("containsSubstring", () => {
  it("should correctly check substrings", () => {
    expect(containsSubstring("", "")).toBe(false);
    expect(containsSubstring("abc", "")).toBe(false);
    expect(containsSubstring("", "abc")).toBe(false);

    expect(containsSubstring("abc", "a")).toBe(true);
    expect(containsSubstring("abc", "B")).toBe(true);
    expect(containsSubstring("Some Value", "value")).toBe(true);
    expect(containsSubstring("Some Value", "missing")).toBe(false);

    expect(containsSubstring("abc", "a.c")).toBe(true);
    expect(containsSubstring("abc", ".")).toBe(true);
  });
});

describe("wrapText", () => {
  it("should break text between words within the width", () => {
    expect(wrapText("talk to the barman about the job", 12)).toEqualLuaArrays([
      "talk to the",
      "barman about",
      "the job",
    ]);
    expect(wrapText("a  b", 5)).toEqualLuaArrays(["a b"]);
    expect(wrapText("", 5)).toEqualLuaArrays([]);
  });

  it("should cut a word longer than a line into pieces", () => {
    expect(wrapText("unbreakable next", 5)).toEqualLuaArrays(["unbre", "akabl", "e", "next"]);
    expect(wrapText("go {+info}title_one", 8)).toEqualLuaArrays(["go", "{+info}t", "itle_one"]);
  });

  it("should give a line a character at least", () => {
    expect(wrapText("ab", 0)).toEqualLuaArrays(["a", "b"]);
  });
});
