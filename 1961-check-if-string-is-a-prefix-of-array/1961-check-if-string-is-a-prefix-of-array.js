/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
       
    for (let i = 0; i < words.length+1; i++) {
        if (words.slice(0,i).join("") === s) return true
    }
    
    return false
    
};

/*
Date: 4/1/2024
Runtime: 46 ms, faster than 93.14% 
Memory Usage: 50.9 MB, less than 9.71%
======== test case ==========
"aaaaaaa"
["a","a","a","a","a","a","a"]
"z"
["z"]
*/