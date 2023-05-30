/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    // fill array of 10 digit with 0 for counting
    let count = new Array(10).fill(0)
    
    // count frequency
    for(let i = 0; i < num.length; i++) {
        count[num[i]]++
    }
    
    // check requirement
    for(let i = 0; i < num.length; i++) {
        if (Number(num[i]) !== count[i]) return false
    }
    
    return true
};

/** 
# Rank 1166,451
# Date 5/30/2023
# Runtime: 68 ms, faster than 40.13%
# Memory Usage: 42.4 MB, less than 55.26%

 */