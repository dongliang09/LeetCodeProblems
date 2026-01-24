/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if (x < 0) return false
    if (x < 10) return true

    let str = x.toString();
    let len = str.length;
    if (len % 2 === 0) {
        if (str.slice(0, len /2) === str.slice(len/2, len).split("").reverse().join("")) return true
    }
    else {
        if (str.slice(0, (len+1) /2) === str.slice(len /2).split("").reverse().join("")) return true
    }

    return false
    
    
};