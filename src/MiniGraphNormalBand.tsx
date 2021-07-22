import React from "react";
import chroma from "chroma-js";

import MiniGraphContext from "./MiniGraphContext";
import { pointsInContext } from "./utils/dataTransform";
import { normPoints } from "./utils/norm";
import { Point } from "./types";

export type MiniGraphNormalBandProps = {
    opacity?: number;
};

export type MiniGraphNormalBandComponent = React.FunctionComponent<MiniGraphNormalBandProps>;

const MiniGraphNormalBand: MiniGraphNormalBandComponent = ({ opacity = 0.2 }): JSX.Element => {
    const context = React.useContext(MiniGraphContext);
    const points: Point[] = pointsInContext(context);

    if (!points.length || !context.domRect) return <React.Fragment />;

    const { avg, stdev } = normPoints(points);

    return (
        <rect
            x={0}
            y={avg - stdev}
            width={context.domRect.width}
            height={stdev * 2}
            fill={chroma.scale([context.colour]).colors(5)[3]}
            opacity={opacity}
        />
    );
};

export default MiniGraphNormalBand;
