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
"aaaaaaa"
["a","a","a","a","a","a","a"]
"z"
["z"]
*/