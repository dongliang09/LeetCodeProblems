/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    
    let freqObj = {};
    
    for (const letter of arr) {
        if(freqObj[letter] === undefined) freqObj[letter] = 1
        else freqObj[letter]++
    }
    
    let singleArr = []
    
    for (const letter of arr) {
        if (freqObj[letter] === 1) singleArr.push(letter)
    }
    
    if (k > singleArr.length) return ""
    return singleArr[k-1]
    
};

/*
Date: 08/05/2024
Runtime: 52 ms, faster than 97.45% 
Memory Usage: 52.8 MB, less than 46.43% 
*/