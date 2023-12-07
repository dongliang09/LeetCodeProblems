/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    
    for (let i = 0 ; i < num.length; i++) {
        if (Number(num[num.length - i - 1]) % 2 === 1) {
            return num.slice(0, num.length - i)
        }
    }
    
    return ""
    
};