/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    
    // =========== idea ============
    // b^2 = c - a^2
    // if b is interger, then return true
    
    if ( c === 0 ) return true
    
    for (let i = 0; i * i < c; i++) {
        if (Math.sqrt(c - i**2) % 1 === 0) return true
    }
    
    return false
};

/*
Date: 06/18/2024
Runtime: 65 ms, faster than 32.19% 
Memory Usage: 50.9 MB, less than 39.04% 
*/