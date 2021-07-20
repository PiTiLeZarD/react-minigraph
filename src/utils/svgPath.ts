import { Point } from "../types";

export type PathCommandFn = (point: Point, indx?: number, points?: Point[]) => string;

const line: PathCommandFn = (point: Point) => `L ${point.x} ${point.y}`;

const close = (currentLine: string, points: Point[], height: number) =>
    [
        currentLine,
        line({ x: points[points.length - 1].x, y: height }),
        line({ x: points[0].x, y: height }),
        line(points[0]),
    ].join(" ");

const opposedLine = (p1: Point, p2: Point) => {
    const lengthX = p2.x - p1.x;
    const lengthY = p2.y - p1.y;
    return {
        length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
        angle: Math.atan2(lengthY, lengthX),
    };
};

const controlPoint = (
    current: Point,
    previous: Point | undefined,
    next: Point | undefined,
    smoothing: number,
    reverse: boolean = false
): Point => {
    const p = previous || current;
    const n = next || current;

    const o = opposedLine(p, n);

    const angle = o.angle + (reverse ? Math.PI : 0);
    const length = o.length * smoothing;

    return { x: current.x + Math.cos(angle) * length, y: current.y + Math.sin(angle) * length };
};

const bezier: PathCommandFn = (point: Point, indx: number, points: Point[], smoothing: number = 0.25): string => {
    const cps = controlPoint(points[indx - 1], points[indx - 2], point, smoothing);
    const cpe = controlPoint(point, points[indx - 1], points[indx + 1], smoothing, true);
    return `C ${cps.x},${cps.y} ${cpe.x},${cpe.y} ${point.x},${point.y}`;
};

const svgPath = (points: Point[], command: PathCommandFn, closed: number | false = false): string => {
    const line = points.reduce(
        (acc, point, i, a) => (i === 0 ? `M ${point.x},${point.y}` : `${acc} ${command(point, i, a)}`),
        ""
    );
    if (closed) {
        return close(line, points, closed);
    }
    return line;
};

export { line, bezier };

export default svgPath;
