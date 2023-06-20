export type Point = {
    x: number;
    y: number;
};

export type SvgPathCommandFn = (point: Point, indx?: number, points?: Point[]) => string;

export type { MiniGraphComponent, MiniGraphProps } from "./MiniGraph";
export type { MiniGraphAverageComponent, MiniGraphAverageProps } from "./MiniGraphAverage";
export type { MiniGraphLinesComponent, MiniGraphLinesProps } from "./MiniGraphLines";
export type { MiniGraphNormalBandComponent, MiniGraphNormalBandProps } from "./MiniGraphNormalBand";
export type { MiniGraphVerticalBarsComponent, MiniGraphVerticalBarsProps } from "./MiniGraphVerticalBars";
