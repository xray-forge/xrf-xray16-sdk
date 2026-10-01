import { describe, expect, it } from "@jest/globals";
import { type CTime } from "xray16";

import { MockCTime } from "./mock-ctime";

describe("MockCTime", () => {
  it("should count milliseconds from the start of year 1 as the engine does", () => {
    expect(MockCTime.toMilliseconds(1, 1, 1, 0, 0, 0, 0)).toBe(0);
    expect(MockCTime.toMilliseconds(1, 1, 2, 0, 0, 0, 0)).toBe(86_400_000);
    expect(MockCTime.toMilliseconds(1, 3, 1, 0, 0, 0, 0)).toBe(59 * 86_400_000);
    expect(MockCTime.toMilliseconds(2012, 3, 1, 0, 0, 0, 0) - MockCTime.toMilliseconds(2012, 2, 1, 0, 0, 0, 0)).toBe(
      29 * 86_400_000
    );
    expect(MockCTime.toMilliseconds(1900, 3, 1, 0, 0, 0, 0) - MockCTime.toMilliseconds(1900, 2, 1, 0, 0, 0, 0)).toBe(
      28 * 86_400_000
    );
  });

  it("should carry fields set past their range over into normalized fields", () => {
    const time: MockCTime = MockCTime.create(2012, 6, 12, 23, 59, 30 + 190, 0);

    expect(time.get(0, 0, 0, 0, 0, 0, 0)).toEqual([2012, 6, 13, 0, 2, 40, 0]);
    expect(MockCTime.create(2012, 12, 31, 23, 59, 60, 0).toString()).toBe("y:2013, m:1, d:1, h:0, min:0, sec:0, ms:0");
    expect(MockCTime.create(2012, 2, 28, 24, 0, 0, 0).toString()).toBe("y:2012, m:2, d:29, h:0, min:0, sec:0, ms:0");
  });

  it("should give signed seconds between times as the engine does", () => {
    const earlier: MockCTime = MockCTime.create(2012, 6, 12, 9, 30, 0, 0);
    const later: MockCTime = MockCTime.create(2012, 6, 12, 10, 45, 30, 500);

    expect(later.diffSec(earlier as unknown as CTime)).toBe(4530.5);
    expect(earlier.diffSec(later as unknown as CTime)).toBe(-4530.5);
    expect(earlier.diffSec(earlier.copy() as unknown as CTime)).toBe(0);
    expect(MockCTime.create(2012, 7, 1, 0, 0, 0, 0).diffSec(MockCTime.mock(2012, 6, 30, 0, 0, 0, 0))).toBe(86_400);
  });

  it("should add and subtract durations set from the start of year 1", () => {
    const time: MockCTime = MockCTime.create(2012, 6, 12, 23, 0, 0, 0);
    const duration: MockCTime = new MockCTime();

    duration.setHMS(2, 30, 0);

    expect(duration.toString()).toBe("y:1, m:1, d:1, h:2, min:30, sec:0, ms:0");

    time.add(duration as unknown as CTime);

    expect(time.toString()).toBe("y:2012, m:6, d:13, h:1, min:30, sec:0, ms:0");

    time.sub(duration as unknown as CTime);

    expect(time.toString()).toBe("y:2012, m:6, d:12, h:23, min:0, sec:0, ms:0");

    duration.sub(time as unknown as CTime);

    expect(duration.toAbsolute()).toBe(0);
  });

  it("should compare and copy by the time they hold", () => {
    const time: MockCTime = MockCTime.create(2012, 6, 12, 9, 30, 0, 0);

    expect(MockCTime.areEqual(time, MockCTime.create(2012, 6, 11, 33, 30, 0, 0))).toBe(true);
    expect(MockCTime.areEqual(time, MockCTime.create(2012, 6, 12, 9, 30, 0, 1))).toBe(false);
    expect(time.copy()).not.toBe(time);
    expect(MockCTime.areEqual(time.copy(), time)).toBe(true);
    expect(MockCTime.create(1970, 1, 1, 0, 0, 1, 0).toTimestamp()).toBe(1000);
  });
});
