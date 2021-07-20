import React from "react";
import MiniGraphContext from "./MiniGraphContext";
import { Point } from "./utils/types";
import { pointsInContext } from "./utils/dataTransform";
import svgPath, { line, bezier } from "./utils/svgPath";

export type MiniGraphLinesProps = {
    color?: string;
    fill?: string | false;
    curved?: boolean;
};

export type MiniGraphLinesComponent = React.FunctionComponent<MiniGraphLinesProps>;

const MiniGraphLines: MiniGraphLinesComponent = ({
    color = "#1B1C47",
    fill = "#D7E5F1",
    curved = false,
}): JSX.Element => {
    const context = React.useContext(MiniGraphContext);
    const points: Point[] = pointsInContext(context);

    if (!points.length || !context.domRect) return <React.Fragment />;

    const command = curved ? bezier : line;

    return (
        <g>
            <path d={svgPath(points, command)} fill="none" stroke={color} />
            {fill && <path d={svgPath(points, command, context.domRect.height)} fill={fill} stroke="none" />}
        </g>
    );
};

export default MiniGraphLines;