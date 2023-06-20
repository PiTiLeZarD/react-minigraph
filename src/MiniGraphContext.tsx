import React from "react";

import { Point } from "./types";

export type MiniGraphContextType = {
    points: Point[];
    domRect?: DOMRect;
    colour: string;
};

export const MiniGraphContext = React.createContext<MiniGraphContextType>({ points: [], colour: "" });
