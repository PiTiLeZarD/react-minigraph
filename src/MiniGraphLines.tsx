import React from "react";
import MiniGraphContext from "./MiniGraphContext";
import { Point } from "./types";
import { pointsInContext } from "./utils/dataTransform";
import svgPath, { line, bezier, steps as stepsCmd } from "./utils/svgPath";
import { getFill } from "./utils/colours";

export type MiniGraphLinesProps = {
    filled?: boolean;
    curved?: boolean;
    steps?: boolean;
};

export type MiniGraphLinesComponent = React.FunctionComponent<MiniGraphLinesProps>;

const MiniGraphLines: MiniGraphLinesComponent = ({ curved = false, filled = false, steps = false }): JSX.Element => {
    const context = React.useContext(MiniGraphContext);
    const points: Point[] = pointsInContext(context);

    if (!points.length || !context.domRect) return <React.Fragment />;

    const command = curved ? bezier : steps ? stepsCmd : line;

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

export default MiniGraphLines;
