import React from "react";
import MiniGraphContext from "./MiniGraphContext";
import { pointsInContext } from "./utils/dataTransform";
import { normPoints } from "./utils/norm";
import { Point } from "./utils/types";

export type MiniGraphNormalBandProps = {};

export type MiniGraphNormalBandComponent = React.FunctionComponent<MiniGraphNormalBandProps>;

const MiniGraphNormalBand: MiniGraphNormalBandComponent = ({}): JSX.Element => {
    const context = React.useContext(MiniGraphContext);
    const points: Point[] = pointsInContext(context);

    if (!points.length || !context.domRect) return <React.Fragment />;

    const { avg, stdev } = normPoints(points);

    return <rect x={0} y={avg - stdev} width={context.domRect.width} height={stdev * 2} fill="red" opacity="0.1" />;
};

export default MiniGraphNormalBand;
