/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    
    if (num === 1) return false
    
    let divisors = [];
    
    for (let i = 1; i < num / 2 + 1; i++) {
        if (num / i  % 1 === 0) divisors.push(i)
    }
    
    let sum = 0;
    for (let i = 0; i < divisors.length; i++) {
        sum += divisors[i]
    }
    
    if (sum === num) return true
    else return false
    
};

/*
# Rank 179,825
# Date 5/21/2023
# Runtime: 5543 ms, faster than 12.21% 
# Memory Usage:  42.6 MB, less than 9.67%

*/