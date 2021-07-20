import React from "react";
import MiniGraphContext from "./MiniGraphContext";
import { pointsInContext } from "./utils/dataTransform";
import { avgPoints } from "./utils/norm";
import { Point } from "./utils/types";

export type MiniGraphAverageProps = {};

export type MiniGraphAverageComponent = React.FunctionComponent<MiniGraphAverageProps>;

const MiniGraphAverage: MiniGraphAverageComponent = ({}): JSX.Element => {
    const context = React.useContext(MiniGraphContext);
    const points: Point[] = pointsInContext(context);

    if (!points.length || !context.domRect) return <React.Fragment />;

    const avg = avgPoints(points);

    return <line x1="0" x2={context.domRect.width} y1={avg} y2={avg} stroke="red" strokeDasharray="2, 2" />;
};

export default MiniGraphAverage;
