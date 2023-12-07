/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    
    for (let i = 0 ; i < num.length; i++) {
        if (Number(num[num.length - i - 1]) % 2 === 1) {
            return num.slice(0, num.length - i)
        }
    }
    
    return ""
    
};

/*
Rank 128,948
Runtime: 54 ms, faster than 88.28%
Memory Usage: 45.6 MB, less than 40.96%
*/