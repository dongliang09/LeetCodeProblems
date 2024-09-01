/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    
    if (original.length !== m*n) return []
    
    let output = [];
    let pointer = 0;
    
    for (let i = 0; i < m; i++) {
        output.push(original.slice(pointer, pointer + n));
        pointer += n;
    }
    
    return output
    
};

/*
Date: 08/31/2024
Runtime: 177 ms, faster than 69.54% 
Memory Usage: 69.5 MB, less than 73.60%
*/