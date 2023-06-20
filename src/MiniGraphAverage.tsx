import chroma from "chroma-js";
import React from "react";

import { MiniGraphContext } from "./MiniGraphContext";
import { Point } from "./types";
import { pointsInContext } from "./utils/dataTransform";
import { avgPoints } from "./utils/norm";

export type MiniGraphAverageProps = {};

export type MiniGraphAverageComponent = React.FunctionComponent<MiniGraphAverageProps>;

export const MiniGraphAverage: MiniGraphAverageComponent = ({}): JSX.Element => {
    const context = React.useContext(MiniGraphContext);
    const points: Point[] = pointsInContext(context);

    if (!points.length || !context.domRect) return <React.Fragment />;

    const avg = avgPoints(points);

    return (
        <line
            x1="0"
            y1={avg}
            x2={context.domRect.width}
            y2={avg}
            stroke={chroma.scale([context.colour]).colors(5)[2]}
            strokeDasharray="2, 2"
        />
    );
};
