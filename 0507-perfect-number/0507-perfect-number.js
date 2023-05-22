/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    
    if (num === 1) return false
    
    let divisors = [];
    
    for (let i = 1; i < num / 2 + 1; i++) {
        if (num / i  % 1 === 0) divisors.push(i)
    }
    
    let sum = 0;
    for (let i = 0; i < divisors.length; i++) {
        sum += divisors[i]
    }
    
    if (sum === num) return true
    else return false
    
};