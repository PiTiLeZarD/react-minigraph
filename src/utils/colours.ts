import chroma from "chroma-js";

export const getFill = (color: string): string => chroma(color).brighten(2).hex();
