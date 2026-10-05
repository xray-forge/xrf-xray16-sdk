/**
 * Builder joining strings appended one by one, as Lua concatenates a list faster than strings one at a time.
 */
export class StringBuilder {
  protected content: Array<string> = [];

  /**
   * Append a string after the ones appended before.
   *
   * @param value - String to append.
   */
  public append(value: string): void {
    this.content.push(value);
  }

  /**
   * @param separator - String put between appended strings.
   * @returns Appended strings joined, an empty string when none was appended.
   */
  public build(separator: string = ""): string {
    return this.content.join(separator);
  }
}
