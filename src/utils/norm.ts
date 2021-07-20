import { pointsToData } from "./dataTransform";
import { Point } from "../types";

const avg = (data: number[]): number => data.reduce((acc: number, curr: number) => acc + curr, 0) / data.length;
const avgPoints = (points: Point[]): number => avg(pointsToData(points));

const stdev = (data: number[]): number => {
    const dataAvg = avg(data);
    const sqDiff = data.map((d: number) => Math.pow(d - dataAvg, 2));
    const avgSqDiff = avg(sqDiff);
    return Math.sqrt(avgSqDiff);
};
const stdevPoints = (points: Point[]): number => stdev(pointsToData(points));

const norm = (data: number[]) => ({
    avg: avg(data),
    stdev: stdev(data),
});

const normPoints = (points: Point[]) => norm(pointsToData(points));

export { avg, avgPoints, stdev, stdevPoints, norm, normPoints };
