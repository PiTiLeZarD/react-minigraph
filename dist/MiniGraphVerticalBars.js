import React from "react";
import MiniGraphContext from "./MiniGraphContext";
import { pointsInContext } from "./utils/dataTransform";
var MiniGraphVerticalBars = function (_a) {
    var _b = _a.margin, margin = _b === void 0 ? 0 : _b, _c = _a.color, color = _c === void 0 ? "#1B1C47" : _c;
    var context = React.useContext(MiniGraphContext);
    var points = pointsInContext(context, false);
    if (!points.length || !context.domRect)
        return React.createElement(React.Fragment, null);
    var _d = context.domRect, width = _d.width, height = _d.height;
    var barWidth = width / points.length;
    return (React.createElement("g", null, points.map(function (point, i) { return (React.createElement("rect", { key: i, x: point.x + margin, y: point.y, width: barWidth - margin * 2, height: height - point.y, style: { fill: color } })); })));
};
export default MiniGraphVerticalBars;
