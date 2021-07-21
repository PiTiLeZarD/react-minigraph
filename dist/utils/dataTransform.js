import { default as findMaxY } from "./maxY";
var dataToPoints = function (data) { return data.map(function (y, x) { return ({ x: x, y: y }); }); };
var pointsToData = function (points) { return points.map(function (_a) {
    var y = _a.y;
    return y;
}); };
var pointsInContext = function (context, center) {
    if (center === void 0) { center = true; }
    var points = context.points, domRect = context.domRect;
    if (!domRect || !points.length)
        return [];
    var maxY = findMaxY(points);
    var width = domRect.width, height = domRect.height;
    var sectionX = function (x) { return (width / points.length) * (x + (center ? 1 / 2 : 0)); };
    var sectionY = function (y) { return height - (y / maxY) * height; };
    return points.map(function (point, _) { return ({ x: sectionX(point.x), y: sectionY(point.y) }); });
};
export { dataToPoints, pointsToData, pointsInContext };
