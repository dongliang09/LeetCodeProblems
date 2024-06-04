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
    
    // console.log(valueArr)
    
    for (let i = 0; i < valueArr.length; i++) {
        if (!isOdd && valueArr[i] % 2 === 1) isOdd = true
        output += Math.floor(valueArr[i] / 2) * 2
    }
    
    if (isOdd) output++;
    
    return output
};