import React from "react";
import { Point } from "./types";

export type MiniGraphContextType = {
    points: Point[];
    domRect?: DOMRect;
};

const MiniGraphContext = React.createContext<MiniGraphContextType>({ points: [] });

export default MiniGraphContext;
