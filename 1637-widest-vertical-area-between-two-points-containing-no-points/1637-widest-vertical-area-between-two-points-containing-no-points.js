/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    
    let output = 0;
    
    points.sort((a,b)=>(a[0]-b[0]));
    
    for(let i = 1; i < points.length; i++) {
        if (points[i][0] - points[i-1][0] > output) {
            output = points[i][0] - points[i-1][0];
        }
    }
    
    return output 
    
};

/*
Rank: 124,231
Date: 12/21/2023
Runtime: 143 ms, faster than 56.34%
Memory Usage: 62.1 MB, less than 59.15%
*/
