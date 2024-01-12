/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    
    let freqCount = {}
    let sum = 0;
    let unique = []
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] in freqCount) {
            freqCount[nums[i]]++;
        } else {
            freqCount[nums[i]] = 1;
        }
    }
    
    unique = Object.entries(freqCount).filter(element => element[1] === 1);
    
    for (let i = 0; i < unique.length; i++) {
        sum += Number(unique[i][0]);
    }
    
    return sum
};