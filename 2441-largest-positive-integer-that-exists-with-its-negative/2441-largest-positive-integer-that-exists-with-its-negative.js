/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    
    //sort from biggest to smallest
    nums.sort((a,b)=>b-a)
    
    // if first number is negative, that means it has no positive numbers
    if (nums[0] < 0) return -1
    
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(0 - nums[i]) !== -1 && nums[i] > 0) return nums[i]
    }
    
    return -1
    
};