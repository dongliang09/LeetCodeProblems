/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    // fill array of 10 digit with 0 for counting
    let count = new Array(10).fill(0)
    
    // count frequency
    for(let i = 0; i < num.length; i++) {
        count[num[i]]++
    }
    
    // check requirement
    for(let i = 0; i < num.length; i++) {
        if (Number(num[i]) !== count[i]) return false
    }
    
    return true
};