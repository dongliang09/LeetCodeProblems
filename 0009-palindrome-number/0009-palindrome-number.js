/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let original = String(x);
    let reverse = original.split("").reverse().join("");
    
    if (original === reverse) {
        return true
    } else {
        return false
    }
    
};

/*
Rank 331,581
Runtime: 173 ms, faster than 94.69% 
Memory Usage: 50.8 MB, less than 74.78% 
*/