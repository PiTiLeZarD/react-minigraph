import React from "react";

import { MiniGraphContext } from "./MiniGraphContext";
import { Point } from "./types";
import { getFill } from "./utils/colours";
import { pointsInContext } from "./utils/dataTransform";
import svgPath, { bezier, line, steps } from "./utils/svgPath";

export type MiniGraphLinesProps = {
    filled?: boolean;
    mode?: "bezier" | "steps";
};

export type MiniGraphLinesComponent = React.FunctionComponent<MiniGraphLinesProps>;

export const MiniGraphLines: MiniGraphLinesComponent = ({ mode, filled = false }): JSX.Element => {
    const context = React.useContext(MiniGraphContext);
    const points: Point[] = pointsInContext(context);

    if (!points.length || !context.domRect) return <React.Fragment />;

    const command = mode ? { bezier, steps }[mode] : line;

    return (
        <g>
            <path d={svgPath(points, command)} fill="none" stroke={context.colour} />
            {filled && (
                <path
                    d={svgPath(points, command, context.domRect.height)}
                    fill={getFill(context.colour)}
                    stroke="none"
                />
            )}
        </g>
    );
};
