import { Point, SvgPathCommandFn } from "../../types";
import { line } from "./line";

export const steps: SvgPathCommandFn = (
    point: Point,
    indx: number,
    points: Point[],
    smoothing: number = 0.25
): string => {
    return `${line({ x: point.x, y: points[indx - 1].y })} ${line(point)}`;
};
