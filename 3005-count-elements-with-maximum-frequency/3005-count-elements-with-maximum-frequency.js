/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {

    let freqObj = {}
    let output = 0

    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        if (freqObj[curr] === undefined) freqObj[curr] = 1;
        else freqObj[curr]++
    }

    let sortArr = Object.entries(freqObj).sort((a,b)=> b[1] - a[1])
    let maxFreq = sortArr[0][1];

    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i][1] === maxFreq) output += maxFreq
        else break;
    }

    return output
    
};

/**
Date: 09/21/2025
 */