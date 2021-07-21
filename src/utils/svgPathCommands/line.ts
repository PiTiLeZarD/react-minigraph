import { Point, SvgPathCommandFn } from "../../types";

const line: SvgPathCommandFn = (point: Point) => `L ${point.x} ${point.y}`;

export default line;
