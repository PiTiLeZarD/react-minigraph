import React from "react";
import MiniGraphContext from "./MiniGraphContext";
import { Point } from "./types";
import { pointsInContext } from "./utils/dataTransform";
import svgPath, { line, bezier, steps as stepsCmd } from "./utils/svgPath";

export type MiniGraphLinesProps = {
    color?: string;
    fill?: string | false;
    curved?: boolean;
    steps?: boolean;
};

export type MiniGraphLinesComponent = React.FunctionComponent<MiniGraphLinesProps>;

const MiniGraphLines: MiniGraphLinesComponent = ({
    color = "#1B1C47",
    fill = "#D7E5F1",
    curved = false,
    steps = false,
}): JSX.Element => {
    const context = React.useContext(MiniGraphContext);
    const points: Point[] = pointsInContext(context);

    if (!points.length || !context.domRect) return <React.Fragment />;

    const command = curved ? bezier : steps ? stepsCmd : line;

    return (
        <g>
            <path d={svgPath(points, command)} fill="none" stroke={color} />
            {fill && <path d={svgPath(points, command, context.domRect.height)} fill={fill} stroke="none" />}
        </g>
    );
};

export default MiniGraphLines;
