export type Point = {
    x: number;
    y: number;
};

export { default as MiniGraph, MiniGraphProps, MiniGraphComponent } from "./MiniGraph";
export { default as MiniGraphLines, MiniGraphLinesProps, MiniGraphLinesComponent } from "./MiniGraphLines";
export { default as MiniGraphAverage, MiniGraphAverageProps, MiniGraphAverageComponent } from "./MiniGraphAverage";
export {
    default as MiniGraphVerticalBars,
    MiniGraphVerticalBarsProps,
    MiniGraphVerticalBarsComponent,
} from "./MiniGraphVerticalBars";
export {
    default as MiniGraphNormalBand,
    MiniGraphNormalBandProps,
    MiniGraphNormalBandComponent,
} from "./MiniGraphNormalBand";
