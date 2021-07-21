import { pointsToData } from "./dataTransform";
var avg = function (data) { return data.reduce(function (acc, curr) { return acc + curr; }, 0) / data.length; };
var avgPoints = function (points) { return avg(pointsToData(points)); };
var stdev = function (data) {
    var dataAvg = avg(data);
    var sqDiff = data.map(function (d) { return Math.pow(d - dataAvg, 2); });
    var avgSqDiff = avg(sqDiff);
    return Math.sqrt(avgSqDiff);
};
var stdevPoints = function (points) { return stdev(pointsToData(points)); };
var norm = function (data) { return ({
    avg: avg(data),
    stdev: stdev(data),
}); };
var normPoints = function (points) { return norm(pointsToData(points)); };
export { avg, avgPoints, stdev, stdevPoints, norm, normPoints };
