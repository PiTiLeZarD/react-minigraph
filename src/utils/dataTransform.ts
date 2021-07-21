import MiniGraphContext, { MiniGraphContextType } from "../MiniGraphContext";
import { Point } from "../types";
import { default as findMaxY } from "./maxY";

const dataToPoints = (data: number[]): Point[] => data.map((y: number, x: number) => ({ x, y }));

const pointsToData = (points: Point[]): number[] => points.map(({ y }) => y);

const pointsInContext = (context: MiniGraphContextType, center = true): Point[] => {
    const { points, domRect } = context;

    if (!domRect || !points.length) return [];

    const maxY = findMaxY(points);
    const { width, height } = domRect;

    const sectionX = (x: number) => (width / points.length) * (x + (center ? 1 / 2 : 0));
    const sectionY = (y: number) => height - (y / maxY) * height;
    return points.map((point: Point, _): Point => ({ x: sectionX(point.x), y: sectionY(point.y) }));
};

const centerToStartPoints = (points: Point[]): Point[] =>
    points.map((point: Point, _) => ({ x: point.x - (points[1].x - points[0].x) / 2, y: point.y }));

export { dataToPoints, pointsToData, pointsInContext, centerToStartPoints };
