import { Point } from "./types";

const maxY = (points: Point[]): number => points.reduce((acc: number, curr: Point) => (curr.y > acc ? curr.y : acc), 0);

export default maxY;
