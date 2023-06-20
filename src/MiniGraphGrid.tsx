import React from "react";

import { MiniGraphContext } from "./MiniGraphContext";
import { Point } from "./types";
import { pointsInContext } from "./utils/dataTransform";
import maxY from "./utils/maxY";

export type MiniGraphGridProps = {
    mode?: "vertical" | "horizontal";
    every: number;
};

export type MiniGraphGridComponent = React.FunctionComponent<MiniGraphGridProps>;

export const MiniGraphGrid: MiniGraphGridComponent = ({ mode = "horizontal", every }): JSX.Element => {
    const context = React.useContext(MiniGraphContext);
    const points: Point[] = pointsInContext(context);

    if (!points.length || !context.domRect) return <React.Fragment />;

    const { height, width } = context.domRect;
    const amplitude = maxY(context.points);

    const lineCount = Math.floor((mode == "horizontal" ? amplitude : points.length) / every);
    const diffPx = (mode == "horizontal" ? height : width) / lineCount;

    return (
        <React.Fragment>
            {Array(lineCount + 1)
                .fill(null)
                .map((_, indx: number) => (
                    <line
                        key={indx}
                        x1={mode == "horizontal" ? 0 : indx * diffPx}
                        y1={mode == "horizontal" ? height - indx * diffPx : 0}
                        x2={mode == "horizontal" ? width : indx * diffPx}
                        y2={mode == "horizontal" ? height - indx * diffPx : height}
                        stroke="#ddd"
                    />
                ))}
        </React.Fragment>
    );
};
