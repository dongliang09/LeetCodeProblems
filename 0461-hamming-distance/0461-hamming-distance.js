/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    
    let output = 0
    
    let max = x > y ? x : y
    let maxLen = max.toString(2).length
    
    let x2binary = x.toString(2).padStart(maxLen, '0')
    let y2binary = y.toString(2).padStart(maxLen, '0')
    
    // console.log(x2binary, y2binary)
    
    for (let i = 0; i < maxLen; i++) {
        if (x2binary[i] !== y2binary[i]) {
            output++
        }
    }
    
    return output
    
};

/*
# Rank 127,109
# Date 07/18/2023
# Runtime: 39 ms, faster than 100.00% 
# Memory Usage: 42 MB, less than 40.52%

============ test case ==========
4
2
=> 2

*/