/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    
    let formulaSum = 0
    
    if (n === 1) return 1
    
    for(let i = 1; i < n + 1; i++) {
        formulaSum = (1 * (i + 1)) * i / 2
        if (formulaSum > n) return i - 1
    }
    
};