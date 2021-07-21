var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import MiniGraphContext from "./MiniGraphContext";
import { dataToPoints } from "./utils/dataTransform";
var MiniGraph = function (_a) {
    var data = _a.data, children = _a.children;
    var _b = React.useState(undefined), rect = _b[0], setRect = _b[1];
    var boundingSize = React.useCallback(function (node) {
        if (node != null) {
            setRect(node.getBoundingClientRect());
        }
    }, []);
    if (data.length == 0)
        return React.createElement(React.Fragment, null);
    var contextData = {
        points: dataToPoints(data),
        domRect: rect,
    };
    var svgOpts = { viewBox: "0 0 " + (rect ? rect.width : 0) + " " + (rect ? rect.height : 0) };
    return (React.createElement("div", { ref: boundingSize, style: { height: "100%", minHeight: "100%", width: "100%" } },
        React.createElement(MiniGraphContext.Provider, { value: contextData },
            React.createElement("svg", __assign({}, svgOpts), children))));
};
export default MiniGraph;
