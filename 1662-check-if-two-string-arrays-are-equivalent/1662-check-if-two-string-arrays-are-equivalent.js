/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    
    let string1 = '';
    let string2 = '';
    
    for (let i = 0; i < word1.length; i++) {
        string1 += word1[i];
    }
    
    for (let j = 0; j < word2.length; j++) {
        string2 += word2[j];
    }
    
    if (string1 === string2) {
        return true
    } else {
        return false
    }
    
};



/*
Rank  369,953
Runtime: 86 ms, faster than 69.50% 
Memory Usage: 42.2 MB, less than 52.36% 
*/