import { Frect } from "xray16";

/**
 * Create rectangle based on 4 coordinates.
 *
 * @inline
 *
 * @param x1 - Top left x point.
 * @param y1 - Top left y point.
 * @param x2 - Bottom right x point.
 * @param y2 - Bottom right y point.
 * @returns New rectangle.
 */
export function createRectangle(x1: number, y1: number, x2: number, y2: number): Frect {
  return new Frect().set(x1, y1, x2, y2);
}

/**
 * Create rectangle based on another rectangle.
 *
 * @inline
 *
 * @param from - Target to copy coordinates from.
 * @returns New copied rectangle.
 */
export function copyRectangle(from: Frect): Frect {
  return new Frect().set(from.x1, from.y1, from.x2, from.y2);
}
