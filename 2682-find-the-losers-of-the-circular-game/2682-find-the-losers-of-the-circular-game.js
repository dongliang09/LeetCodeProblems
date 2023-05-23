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
        if (!visitedArr.includes(i)) output.push(i + 1)
    }
    
    return output
};


/*
=======test case ========
2
1
*/