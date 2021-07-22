import chroma from "chroma-js";

const getFill = (color: string): string => chroma(color).brighten(2).hex();

export { getFill };
