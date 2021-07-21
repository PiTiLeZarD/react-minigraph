var maxY = function (points) { return points.reduce(function (acc, curr) { return (curr.y > acc ? curr.y : acc); }, 0); };
export default maxY;
