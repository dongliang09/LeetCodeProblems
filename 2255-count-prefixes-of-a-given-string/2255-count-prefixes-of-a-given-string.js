/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    
    let output = 0;
    
    for (let i = 0; i < words.length; i++) {
        if (s.indexOf(words[i]) === 0) output++;
    }
    
    return output
};

/*
Date: 4/1/2024
Runtime: 56 ms, faster than 55.00% 
Memory Usage: 49.2 MB, less than 81.00% 
*/