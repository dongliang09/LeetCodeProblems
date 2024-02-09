/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    
    let freqObj = {};
    let output = [0,0];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in freqObj) {
            freqObj[nums[i]]++;
        } else {
            freqObj[nums[i]] = 1;
        }
    }
    
    let freqValues = Object.values(freqObj);
    
    for (let i = 0; i < freqValues.length; i++) {
        output[1] += freqValues[i] % 2;
        output[0] += Math.floor(freqValues[i] / 2);
    }
    
    return output
    
};