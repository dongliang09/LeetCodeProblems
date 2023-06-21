/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    
    // ============ idead ========
    // it is using the formula to calculate the area of trapozoid 
    // area = (top + bottom) * height / 2
    // in this case top is 1, area is n, height is what we are looking for
    
    // ============= code =========
    
    let formulaSum = 0
    
    if (n === 1) return 1
    
    for(let i = 1; i < n + 1; i++) {
        formulaSum = (1 * (i + 1)) * i / 2
        if (formulaSum > n) return i - 1
    }
    
};

/*
# Rank 143,404
# Date 06/20/2023
# Runtime: 104 ms, faster than 9.73%
# Memory Usage: 44.4 MB, less than 24.89%
*/