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
        startIndex = currStr.indexOf(s[i])
        if (startIndex === -1) return false
        startIndex += 1
    }
    
    return true
    
};


/*

# Rank 182,536
# Date 5/20/2023
# Runtime: 46 ms, faster than 98.48% 
# Memory Usage: 42 MB, less than 53.33%

=============test case ======
"aaaaaa"
"bbaaaa"

*/