/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    
    let visited = new Set()
    visited.add(0)
    let numK = 1
    let current = (0 + numK * k) % n

    while (!visited.has(current)) {
        visited.add(current)
        numK+=1
        current = (current + numK * k) % n    
    }
    
    let output = []
    let visitedArr = [...visited]
    for (let i = 0; i < n; i++) {
        if (!visitedArr.includes(i)) output.push(i + 1) // need to push i + 1 because the seat starts from 1
    }
    
    return output
};


/*
# Rank 179,825
# Date 5/21/2023
# Runtime: 97 ms, faster than 39.02%
# Memory Usage: 44.4 MB, less than 92.33%  
=======test case ========
2
1
*/