/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    
    if (words.length === 1) return true
    
    let countObj = {};
    
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] in countObj) countObj[words[i][j]]++;
            else countObj[words[i][j]] = 1;
        }
    }
    
    let count = Object.entries(countObj);
    
    let isFrequencyEqual = count.every(element => element[1] % words.length === 0);
    
    return isFrequencyEqual
    
//     console.log(isFrequencyEqual, count[0][1] % words.length === 0)
    
//     if (isFrequencyEqual && count[0][1] % words.length === 0) return true
//     else return false
};


/*
============ test case ======
["abbab"]
["caaaaa","aaaaaaaaa","a","bbb","bbbbbbbbb","bbb","cc","cccccccccccc","ccccccc","ccccccc","cc","cccc","c","cccccccc","c"]
*/