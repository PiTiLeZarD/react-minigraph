import React from "react";

import MiniGraphContext from "./MiniGraphContext";
import { Point } from "./types";
import { pointsInContext } from "./utils/dataTransform";

export type MiniGraphVerticalBarsProps = {
    margin?: number;
    color?: string;
};

export type MiniGraphVerticalBarsComponent = React.FunctionComponent<MiniGraphVerticalBarsProps>;

const MiniGraphVerticalBars: MiniGraphVerticalBarsComponent = ({ margin = 0, color = "#1B1C47" }): JSX.Element => {
    const context = React.useContext(MiniGraphContext);
    const points: Point[] = pointsInContext(context, false);

    if (!points.length || !context.domRect) return <React.Fragment />;

    const { width, height } = context.domRect;
    const barWidth = width / points.length;

    return (
        <g>
            {points.map((point: Point, i: number) => (
                <rect
                    key={i}
                    x={point.x + margin}
                    y={point.y}
                    width={barWidth - margin * 2}
                    height={height - point.y}
                    style={{ fill: color }}
                />
            ))}
        </g>
    );
};

export default MiniGraphVerticalBars;
