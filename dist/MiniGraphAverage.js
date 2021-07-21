import React from "react";
import MiniGraphContext from "./MiniGraphContext";
import { pointsInContext } from "./utils/dataTransform";
import { avgPoints } from "./utils/norm";
var MiniGraphAverage = function (_a) {
    var context = React.useContext(MiniGraphContext);
    var points = pointsInContext(context);
    if (!points.length || !context.domRect)
        return React.createElement(React.Fragment, null);
    var avg = avgPoints(points);
    return React.createElement("line", { x1: "0", x2: context.domRect.width, y1: avg, y2: avg, stroke: "red", strokeDasharray: "2, 2" });
};
export default MiniGraphAverage;
