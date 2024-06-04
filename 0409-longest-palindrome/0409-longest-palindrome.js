/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    let freqObj = {}
    let output = 0;
    let isOdd = false
    
    for (let i = 0; i < s.length; i++) {
        if (freqObj[s[i]] === undefined) freqObj[s[i]] = 1;
        else freqObj[s[i]]++
    }
       
    let valueArr = Object.values(freqObj)
    
    for (let i = 0; i < valueArr.length; i++) {
        if (!isOdd && valueArr[i] % 2 === 1) isOdd = true
        output += Math.floor(valueArr[i] / 2) * 2
    }
    
    if (isOdd) output++;
    
    return output
};

/*
Date: 6/3/2024
Runtime: 47 ms, faster than 96.04% 
Memory Usage: 49.8 MB, less than 86.14%
*/