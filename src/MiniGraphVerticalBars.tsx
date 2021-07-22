import React from "react";

import MiniGraphContext from "./MiniGraphContext";
import { Point } from "./types";
import { pointsInContext } from "./utils/dataTransform";

export type MiniGraphVerticalBarsProps = {
    filled?: boolean;
};

export type MiniGraphVerticalBarsComponent = React.FunctionComponent<MiniGraphVerticalBarsProps>;

const MiniGraphVerticalBars: MiniGraphVerticalBarsComponent = ({ filled = false }): JSX.Element => {
    const context = React.useContext(MiniGraphContext);
    const points: Point[] = pointsInContext(context, false);

    if (!points.length || !context.domRect) return <React.Fragment />;

    const margin = 1;
    const { width, height } = context.domRect;
    const barWidth = width / points.length;
    console.log(filled, filled ? { filled: context.fill[0] } : {});

    return (
        <g>
            {points.map((point: Point, i: number) => (
                <rect
                    key={i}
                    x={point.x + margin}
                    y={point.y}
                    width={barWidth - margin * 2}
                    height={height - point.y}
                    stroke={context.stroke[0]}
                    {...(filled ? { fill: context.fill[0] } : { fillOpacity: 0 })}
                />
            ))}
        </g>
    );
};

export default MiniGraphVerticalBars;
