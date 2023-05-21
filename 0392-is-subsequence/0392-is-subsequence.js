/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let startIndex = 0 
    let currStr = t
    for (let i = 0; i < s.length; i++) {
        currStr = currStr.substring(startIndex, t.length)
        // console.log(currStr, startIndex)
        startIndex = currStr.indexOf(s[i])
        // console.log(currStr, startIndex)
        if (startIndex === -1) return false
        startIndex += 1
    }
    
    return true
    
};


/*
=============test case ======


"aaaaaa"
"bbaaaa"

*/