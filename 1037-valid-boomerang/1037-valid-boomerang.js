/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    
    if (String(points[0]) === String(points[1]) || String(points[1]) === String(points[2]) || String(points[0]) === String(points[2])) return false
    
    let slope1 = (points[0][0] - points[1][0]) === 0 ? "vertical" : (points[0][1] - points[1][1]) / (points[0][0] - points[1][0])
    let slope2 = (points[1][0] - points[2][0]) === 0 ? "vertical" : (points[1][1] - points[2][1]) / (points[1][0] - points[2][0])
    
    if (slope1 === slope2) return false
    else return true
};

/*
============ test case =================
[[0,0],[1,1],[1,1]]
*/