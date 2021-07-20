import React from "react";

import MiniGraphContext from "./MiniGraphContext";
import { dataToPoints } from "./utils/dataTransform";

export type MiniGraphProps = {
    data: number[];
};

export type MiniGraphComponent = React.FunctionComponent<MiniGraphProps>;

const MiniGraph: MiniGraphComponent = ({ data, children }): JSX.Element => {
    const [rect, setRect] = React.useState<DOMRect | undefined>(undefined);

    const boundingSize = React.useCallback((node) => {
        if (node != null) {
            setRect(node.getBoundingClientRect());
        }
    }, []);

    if (data.length == 0) return <React.Fragment />;

    const contextData = {
        points: dataToPoints(data),
        domRect: rect,
    };
    const svgOpts = { viewBox: `0 0 ${rect ? rect.width : 0} ${rect ? rect.height : 0}` };

    return (
        <div ref={boundingSize} style={{ height: "100%", minHeight: "100%", width: "100%" }}>
            <MiniGraphContext.Provider value={contextData}>
                <svg {...svgOpts}>{children}</svg>
            </MiniGraphContext.Provider>
        </div>
    );
};

export default MiniGraph;
