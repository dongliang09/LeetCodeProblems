/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    
    //========== idea ========
    // have a set to store the reverse the of words,
    // if the set already has matching of current word, then pair + 1
    // else store the reverse of the current word into set
    
    //========== code ========
    let visited = new Set()
    let output = 0;
    
    for (let i = 0; i < words.length; i++) {
        let current = words[i]
        if (visited.has(current)) output++ 
        else {
            visited.add(current.split("").reverse().join(""))
        }
    }
    return output
};

/*
# Rank 141,076
# Date 06/24/2023
# Runtime: 68 ms, faster than 100.00%
# Memory Usage: 44.4 MB, less than 100.00%
*/