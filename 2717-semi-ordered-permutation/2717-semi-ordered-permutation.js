/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function(nums) {
    
    // goal, 1 reach the front, N reach the end
    // 
    // when index of 1 is less than index of N, 
    // they just swap that many times to the respectively end
    // 
    // otherwise, there will be one swap mutual to both 
    // therefore subtract to the total sum they swap
    
    if (nums[0] === 1 && nums[nums.length - 1] === nums.length) return 0
    
    let index1 = nums.indexOf(1)
    let indexN = nums.indexOf(nums.length)
        
    if (index1 < indexN) return index1 + (nums.length - 1 - indexN)
    else return index1 + (nums.length - 1 - indexN) - 1
    
};

/*
# Rank 163,533
# Date 6/3/2023
# Runtime: 90 ms, faster than 100.00%
# Memory Usage: 46 MB, less than 100.00% 
*/