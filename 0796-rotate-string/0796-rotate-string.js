/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === goal[0]) {
            let currStr = s.substring(i) + s.substring(0,i)
            if (currStr === goal) return true
        }
    }
    
    return false
};

/*
Date: 11/6/2024
Rank: 113,163
Runtime: 0 ms, faster than 100.00% 
Memory Usage: 48.4 MB, less than 93.87%
*/