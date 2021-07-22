import React from "react";
import { Point } from "./types";

export const colorScales = {
    stroke: ["#1b1c47", "#4e4d72", "#83849e", "#bcc0c8", "#ffbcaf", "#f4777f", "#cf3759", "#93003a"],
    fill: ["#ffffe0", "#f5f8e4", "#ecf2e9", "#e1ebed", "#ff717f", "#ffa6a0", "#ffd4c0", "#ffffe0"],
};

export type MiniGraphContextType = {
    points: Point[];
    domRect?: DOMRect;
    stroke: string[];
    fill: string[];
};

const MiniGraphContext = React.createContext<MiniGraphContextType>({ points: [], ...colorScales });

export default MiniGraphContext;
