/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    
    return num.toString(7)

};

/*
Date: 3/28/2024
Runtime: 46 ms, faster than 85.96% 
Memory Usage: 48.7 MB, less than 69.59%

=================== second try =========

    let len = 1
    let noSignNum = Math.abs(num)
    let boundNum = 7
    
    for (let i = 1; i < noSignNum; i++) {
        if (noSignNum >= boundNum) {
            boundNum *= 7
            len++
        } else {
            break
        }
    }
    
    console.log(len)
    
//     while (noSignNum > 0) {
        
//     }

=============== first thought ============

    let digitOnly = Math.abs(num)
    let maxDigitLen = 0
    
    while (digitOnly >= 7) {
        digitOnly /= 7;
        maxDigitLen++
    }
    console.log(maxDigitLen)
    
    digitOnly = Math.abs(num)
    let remainder = digitOnly
    let output = ""
    for(let i = 0; i < maxDigitLen; i++) {
        let currentDigit = Math.floor(remainder / 7)
        remainder = digitOnly - 7 * currentDigit
        output += String(currentDigit)
    }
    return output

*/