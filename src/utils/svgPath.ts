import { Point, SvgPathCommandFn } from "../types";

import line from "./svgPathCommands/line";
import bezier from "./svgPathCommands/bezier";
export { line, bezier };

const close = (currentLine: string, points: Point[], height: number) =>
    [
        currentLine,
        line({ x: points[points.length - 1].x, y: height }),
        line({ x: points[0].x, y: height }),
        line(points[0]),
    ].join(" ");

const svgPath = (points: Point[], command: SvgPathCommandFn, closed: number | false = false): string => {
    const line = points.reduce(
        (acc, point, i, a) => (i === 0 ? `M ${point.x},${point.y}` : `${acc} ${command(point, i, a)}`),
        ""
    );
    if (closed) {
        return close(line, points, closed);
    }
    return line;
};

export default svgPath;
