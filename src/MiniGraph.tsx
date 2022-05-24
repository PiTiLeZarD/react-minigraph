import React from "react";
import chroma from "chroma-js";

import MiniGraphContext from "./MiniGraphContext";
import { dataToPoints } from "./utils/dataTransform";
import useRect from "./utils/useRect";

export type MiniGraphProps = {
    data: number[];
    colour?: string;
};

export type MiniGraphComponent = React.FunctionComponent<React.PropsWithChildren<MiniGraphProps>>;

const MiniGraph: MiniGraphComponent = ({ data, colour = chroma.random().hex(), children }): JSX.Element => {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const rect: DOMRect | undefined = useRect<HTMLDivElement>(ref);

    if (data.length == 0 || !ref) return <React.Fragment />;

    const contextData = {
        points: dataToPoints(data),
        domRect: rect,
        colour,
    };
    const svgOpts = { viewBox: `0 0 ${rect ? rect.width : 0} ${rect ? rect.height : 0}` };

    return (
        <div ref={ref} style={{ height: "100%", minHeight: "100%", width: "100%" }}>
            <MiniGraphContext.Provider value={contextData}>
                <svg {...svgOpts}>{children}</svg>
            </MiniGraphContext.Provider>
        </div>
    );
};

export default MiniGraph;
