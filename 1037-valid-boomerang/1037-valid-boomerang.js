/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    
    // if slope 1 is not same as slope 2, then they are boomerang
    
    if (String(points[0]) === String(points[1]) || String(points[1]) === String(points[2]) || String(points[0]) === String(points[2])) return false
    
    let slope1 = (points[0][0] - points[1][0]) === 0 ? "vertical" : (points[0][1] - points[1][1]) / (points[0][0] - points[1][0])
    let slope2 = (points[1][0] - points[2][0]) === 0 ? "vertical" : (points[1][1] - points[2][1]) / (points[1][0] - points[2][0])
    
    if (slope1 === slope2) return false
    else return true
};

/*
# Rank 145,290
# Date 06/18/2023
# Runtime:  48 ms, faster than 93.42%
# Memory Usage:  41.9 MB, less than 72.37%
============ test case =================
[[0,0],[1,1],[1,1]]
*/