/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    
    let output = 0;
    let words = s.split(" ")
    
    for(let i = 0; i < words.length; i++) {
        if (words[i].length) output++
    }
    
    return output
};

/*
# Rank 141,076
# Date 06/24/2023
# Runtime: 56 ms, faster than 61.15%
# Memory Usage: 41.9 MB, less than 46.19%
*/