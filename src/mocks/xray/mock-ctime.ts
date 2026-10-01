import { jest } from "@jest/globals";
import { type CTime } from "xray16";

const DAYS_IN_MONTHS: ReadonlyArray<number> = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/**
 * Mock of the X-Ray engine `CTime` object for jest/node.
 * Keeps time as the engine `xrTime` does, milliseconds since the start of year 1, and splits it into date fields.
 */
export class MockCTime implements CTime {
  public static create(y: number, m: number, d: number, h: number, min: number, sec: number, ms: number): MockCTime {
    const time: MockCTime = new MockCTime();

    time.set(y, m, d, h, min, sec, ms);

    return time;
  }

  /**
   * Create a mock typed as the engine `CTime`, for use where a real `CTime` is expected.
   */
  public static mock(y: number, m: number, d: number, h: number, min: number, sec: number, ms: number): CTime {
    return MockCTime.create(y, m, d, h, min, sec, ms) as unknown as CTime;
  }

  public static areEqual(first: MockCTime | CTime, second: MockCTime | CTime): boolean {
    return (first as MockCTime).isEqual(second);
  }

  public static nowTime: MockCTime = MockCTime.create(2012, 6, 12, 9, 30, 0, 0);

  public static now(): MockCTime {
    return MockCTime.nowTime.copy();
  }

  /**
   * Port of the engine `generate_time`: fields past their range carry over, as `set(y, m, d, h, min, sec + 90, ms)`.
   *
   * @returns Milliseconds since the start of year 1.
   */
  public static toMilliseconds(
    y: number,
    m: number,
    d: number,
    h: number,
    min: number,
    sec: number,
    ms: number
  ): number {
    const yearsBefore: number = y - 1;
    let days: number =
      yearsBefore * 365 + Math.floor(yearsBefore / 4) - Math.floor(yearsBefore / 100) + Math.floor(yearsBefore / 400);

    for (let month = 1; month < Math.min(m, 12); month++) {
      days += MockCTime.getDaysInMonth(y, month);
    }

    days += d - 1;

    return (((days * 24 + h) * 60 + min) * 60 + sec) * 1000 + ms;
  }

  private static isLeapYear(y: number): boolean {
    return y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0);
  }

  private static getDaysInMonth(y: number, m: number): number {
    return m === 2 && MockCTime.isLeapYear(y) ? 29 : DAYS_IN_MONTHS[m - 1];
  }

  /**
   * Read time of another `CTime` through its fields, which works for spied or partial mocks as well.
   */
  private static getMilliseconds(time: MockCTime | CTime): number {
    const [y, m, d, h, min, sec, ms] = time.get(0, 0, 0, 0, 0, 0, 0);

    return MockCTime.toMilliseconds(y, m, d, h, min, sec, ms);
  }

  public __name: string = "CTime";

  public y: number = 2012;
  public m: number = 6;
  public d: number = 12;
  public h: number = 9;
  public min: number = 30;
  public sec: number = 0;
  public ms: number = 0;

  public get = jest.fn((_y: number, _m: number, _d: number, _h: number, _min: number, _sec: number, _ms: number) => {
    return [this.y, this.m, this.d, this.h, this.min, this.sec, this.ms] as unknown as LuaMultiReturn<
      [number, number, number, number, number, number, number]
    >;
  });

  public set = jest.fn((y: number, m: number, d: number, h: number, min: number, sec: number, ms: number): void => {
    this.setMilliseconds(MockCTime.toMilliseconds(y, m, d, h, min, sec, ms));
  });

  /**
   * As the engine: seconds from `target` to this time, negative when this time is earlier.
   */
  public diffSec = jest.fn((target: CTime): number => {
    return (this.toAbsolute() - MockCTime.getMilliseconds(target)) / 1000;
  });

  public add(time: CTime): void {
    this.setMilliseconds(this.toAbsolute() + MockCTime.getMilliseconds(time));
  }

  public dateToString(mode: number): string {
    return [this.d, this.m, this.y][mode]?.toString() ?? "";
  }

  public copy(): MockCTime {
    const time: MockCTime = new MockCTime();

    time.setMilliseconds(this.toAbsolute());

    return time;
  }

  public isEqual(time: MockCTime | CTime): boolean {
    return this.toAbsolute() === MockCTime.getMilliseconds(time);
  }

  /**
   * As the engine: time of day from the start of year 1, as used for durations to `add` or `sub`.
   */
  public setHMS(h: number, m: number, s: number): void {
    this.setMilliseconds(MockCTime.toMilliseconds(1, 1, 1, h, m, s, 0));
  }

  public setHMSms(h: number, m: number, s: number, ms: number): void {
    this.setMilliseconds(MockCTime.toMilliseconds(1, 1, 1, h, m, s, ms));
  }

  /**
   * As the engine: subtracting a later time leaves the start of year 1.
   */
  public sub(time: CTime): void {
    const other: number = MockCTime.getMilliseconds(time);
    const current: number = this.toAbsolute();

    this.setMilliseconds(current > other ? current - other : 0);
  }

  public timeToString(mode: number): string {
    return [this.h, this.min, this.sec, this.ms][mode]?.toString() ?? "";
  }

  public toString(): string {
    return `y:${this.y}, m:${this.m}, d:${this.d}, h:${this.h}, min:${this.min}, sec:${this.sec}, ms:${this.ms}`;
  }

  /**
   * @returns Milliseconds since the start of year 1, as the engine `xrTime` stores time.
   */
  public toAbsolute(): number {
    return MockCTime.toMilliseconds(this.y, this.m, this.d, this.h, this.min, this.sec, this.ms);
  }

  /**
   * @returns Milliseconds since the start of 1970.
   */
  public toTimestamp(): number {
    const base: number = MockCTime.toMilliseconds(1970, 1, 1, 0, 0, 0, 0);
    const current: number = this.toAbsolute();

    if (base > current) {
      throw new Error("Not expected timestamp conversion - base is less than current.");
    }

    return current - base;
  }

  /**
   * Port of the engine `split_time`: store the time as normalized date fields.
   */
  private setMilliseconds(value: number): void {
    let rest: number = Math.floor(value);

    this.ms = rest % 1000;
    rest = Math.floor(rest / 1000);
    this.sec = rest % 60;
    rest = Math.floor(rest / 60);
    this.min = rest % 60;
    rest = Math.floor(rest / 60);
    this.h = rest % 24;
    rest = Math.floor(rest / 24);

    const p0: number = Math.floor(rest / (400 * 365 + 100 - 4 + 1));

    rest -= p0 * (400 * 365 + 100 - 4 + 1);

    const p1: number = Math.floor(rest / (100 * 365 + 25 - 1));

    rest -= p1 * (100 * 365 + 25 - 1);

    const p2: number = Math.floor(rest / (4 * 365 + 1));

    rest -= p2 * (4 * 365 + 1);

    const p3: number = Math.min(Math.floor(rest / 365), 3);

    rest -= p3 * 365;

    this.y = 400 * p0 + 100 * p1 + 4 * p2 + p3 + 1;
    this.m = 1;

    while (this.m < 12 && rest >= MockCTime.getDaysInMonth(this.y, this.m)) {
      rest -= MockCTime.getDaysInMonth(this.y, this.m);
      this.m += 1;
    }

    this.d = rest + 1;
  }
}
