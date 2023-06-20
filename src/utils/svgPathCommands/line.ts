import { Point, SvgPathCommandFn } from "../../types";

export const line: SvgPathCommandFn = (point: Point) => `L ${point.x} ${point.y}`;
