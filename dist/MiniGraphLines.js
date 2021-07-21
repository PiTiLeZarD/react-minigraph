import React from "react";
import MiniGraphContext from "./MiniGraphContext";
import { pointsInContext } from "./utils/dataTransform";
import svgPath, { line, bezier } from "./utils/svgPath";
var MiniGraphLines = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#1B1C47" : _b, _c = _a.fill, fill = _c === void 0 ? "#D7E5F1" : _c, _d = _a.curved, curved = _d === void 0 ? false : _d;
    var context = React.useContext(MiniGraphContext);
    var points = pointsInContext(context);
    if (!points.length || !context.domRect)
        return React.createElement(React.Fragment, null);
    var command = curved ? bezier : line;
    return (React.createElement("g", null,
        React.createElement("path", { d: svgPath(points, command), fill: "none", stroke: color }),
        fill && React.createElement("path", { d: svgPath(points, command, context.domRect.height), fill: fill, stroke: "none" })));
};
export default MiniGraphLines;
