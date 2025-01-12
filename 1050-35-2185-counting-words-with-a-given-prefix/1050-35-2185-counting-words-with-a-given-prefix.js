/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let output = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(pref)) output++;
    }

    return output
    
};

/*
Date: 1/12/2025
Runtime: 0ms, beats 100%
Memory: 49.54MB, beats 92.64%
 */