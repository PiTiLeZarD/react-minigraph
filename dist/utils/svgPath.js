var line = function (point) { return "L " + point.x + " " + point.y; };
var close = function (currentLine, points, height) {
    return [
        currentLine,
        line({ x: points[points.length - 1].x, y: height }),
        line({ x: points[0].x, y: height }),
        line(points[0]),
    ].join(" ");
};
var opposedLine = function (p1, p2) {
    var lengthX = p2.x - p1.x;
    var lengthY = p2.y - p1.y;
    return {
        length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
        angle: Math.atan2(lengthY, lengthX),
    };
};
var controlPoint = function (current, previous, next, smoothing, reverse) {
    if (reverse === void 0) { reverse = false; }
    var p = previous || current;
    var n = next || current;
    var o = opposedLine(p, n);
    var angle = o.angle + (reverse ? Math.PI : 0);
    var length = o.length * smoothing;
    return { x: current.x + Math.cos(angle) * length, y: current.y + Math.sin(angle) * length };
};
var bezier = function (point, indx, points, smoothing) {
    if (smoothing === void 0) { smoothing = 0.25; }
    var cps = controlPoint(points[indx - 1], points[indx - 2], point, smoothing);
    var cpe = controlPoint(point, points[indx - 1], points[indx + 1], smoothing, true);
    return "C " + cps.x + "," + cps.y + " " + cpe.x + "," + cpe.y + " " + point.x + "," + point.y;
};
var svgPath = function (points, command, closed) {
    if (closed === void 0) { closed = false; }
    var line = points.reduce(function (acc, point, i, a) { return (i === 0 ? "M " + point.x + "," + point.y : acc + " " + command(point, i, a)); }, "");
    if (closed) {
        return close(line, points, closed);
    }
    return line;
};
export { line, bezier };
export default svgPath;
