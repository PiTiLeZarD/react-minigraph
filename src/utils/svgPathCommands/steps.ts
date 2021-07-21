import { Point, SvgPathCommandFn } from "../../types";
import line from "./line";

const steps: SvgPathCommandFn = (point: Point, indx: number, points: Point[], smoothing: number = 0.25): string => {
    return `${line({ x: point.x, y: points[indx - 1].y })} ${line(point)}`;
};

export default steps;
