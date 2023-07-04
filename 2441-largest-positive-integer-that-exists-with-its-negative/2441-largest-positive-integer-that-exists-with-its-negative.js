/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    
    // ========== idea ==============
    
    // if the array has only negative, return false
    
    // sort the arrays from biggest to smallest
    // first time we found a negative of current positive number, return that number
    
    // ========== code ==============
    
    //sort from biggest to smallest
    nums.sort((a,b)=>b-a)
    
    // if first number is negative, that means it has no positive numbers
    if (nums[0] < 0) return -1
    
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(0 - nums[i]) !== -1 && nums[i] > 0) return nums[i]
    }
    
    return -1
    
};

/*
# Rank 136,719
# Date 07/03/2023
# Runtime: 89 ms, faster than 36.27%
# Memory Usage: 44.4 MB, less than 74.02%
*/