/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    
    let visited = new Set();
    
    for (let i = 0; i < s.length; i++) {
        if (!visited.has(s[i]) && s[i] >= 0 && s[i] <= 9) {
            visited.add(s[i])
        }
    }
    
    let arr = [...visited]
    
    if (arr.length <= 1) return -1
    else {
        arr.sort();
        return arr[arr.length - 2];
    }
};

/*
Date: 5/1/2024
Runtime: 61 ms, faster than 46.74% 
Memory Usage: 50.7 MB, less than 62.50%
*/