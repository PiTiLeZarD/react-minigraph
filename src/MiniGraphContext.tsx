import React from "react";
import { Point } from "./types";

export type MiniGraphContextType = {
    points: Point[];
    domRect?: DOMRect;
    colour: string;
};

const MiniGraphContext = React.createContext<MiniGraphContextType>({ points: [], colour: "" });

export default MiniGraphContext;
