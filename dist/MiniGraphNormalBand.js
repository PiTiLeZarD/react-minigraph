import React from "react";
import MiniGraphContext from "./MiniGraphContext";
import { pointsInContext } from "./utils/dataTransform";
import { normPoints } from "./utils/norm";
var MiniGraphNormalBand = function (_a) {
    var context = React.useContext(MiniGraphContext);
    var points = pointsInContext(context);
    if (!points.length || !context.domRect)
        return React.createElement(React.Fragment, null);
    var _b = normPoints(points), avg = _b.avg, stdev = _b.stdev;
    return React.createElement("rect", { x: 0, y: avg - stdev, width: context.domRect.width, height: stdev * 2, fill: "red", opacity: "0.1" });
};
export default MiniGraphNormalBand;
