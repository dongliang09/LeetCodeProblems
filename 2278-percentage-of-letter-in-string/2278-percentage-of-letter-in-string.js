/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] ===letter) count++
    }
    
    return Math.floor(count / s.length * 100)
    
};

/*
Date: 02/08/2024
Rank 119,973
Runtime: 54 ms, faster than 43.49%
Memory Usage: 49.1 MB, less than 5.68%
*/