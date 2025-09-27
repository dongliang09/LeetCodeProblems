/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {

    let maxArea = 0;

    for (let i = 0; i < points.length - 2; i++) {
        for (let j = 1; j < points.length - 1; j++) {
            for (let k = 2; k < points.length; k++) {
                let [x1, y1] = points[i]
                let [x2, y2] = points[j]
                let [x3, y3] = points[k]
                let area = 0.5 * Math.abs(x1*(y2-y3) + x2*(y3 - y1) + x3*(y1-y2))
                if (area > maxArea) maxArea = area
            }
        }
    }

    return maxArea
    
};