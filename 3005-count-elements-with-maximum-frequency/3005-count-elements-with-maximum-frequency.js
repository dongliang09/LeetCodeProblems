/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    
    let freqObj = {};
    let freqEntries = [];
    let maxFreq;
    let output = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in freqObj) freqObj[nums[i]]++;
        else freqObj[nums[i]] = 1;
    }
    
    freqEntries = Object.entries(freqObj).sort((a,b)=>b[1]-a[1]);
    
    maxFreq = freqEntries[0][1];
    
    for (let i = 0; i < freqEntries.length; i++) {
        if (freqEntries[i][1] === maxFreq) output += maxFreq
        else break;
    }
    
    return output
    
};