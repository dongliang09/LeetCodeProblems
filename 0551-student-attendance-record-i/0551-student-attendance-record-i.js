/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    
    let countAbsent = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            countAbsent++;
            if (countAbsent >= 2) return false;
        } else if (s[i] === 'L') {
            if (i + 2 < s.length && s[i+1] === 'L' && s[i+2] === 'L') return false
        }
    }
    
    return true
    
};

/*
Date: 3/28/2024
Runtime: 44 ms, faster than 94.24%
Memory Usage: 49.6 MB, less than 15.85%
*/