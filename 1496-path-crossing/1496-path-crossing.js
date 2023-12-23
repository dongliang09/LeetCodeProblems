/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    
    let visited = new Set();
    let point = [0,0];
    
    visited.add(point.toString());
    
    for (let i = 0; i < path.length; i++) {
        if (path[i] === "N") point[1]++;
        else if (path[i] === "S") point[1]--;
        else if (path[i] === "W") point[0]--;
        else if (path[i] === "E") point[0]++;
        
        if (visited.has(point.toString())) return true
        else visited.add(point.toString())
        
    }
    
    return false
};

/*
Rank 122,636
Date: 12/22/2023
Runtime: 53 ms, faster than 49.64%
Memory Usage: 41.6 MB, less than 94.96%
*/