/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    
    let arr = new Array(s.length).fill(s[0]);
    
    for (let i = 0; i < indices.length; i++) {
        arr[indices[i]] = s[i]
    }
    
    return arr.join('')
    
};

/*
Date: 02/18/2024
Rank: 120,099
Runtime: 57 ms, faster than 70.28% 
Memory Usage: 50.7 MB, less than 27.30%
*/