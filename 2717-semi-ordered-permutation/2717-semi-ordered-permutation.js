/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function(nums) {
    
    if (nums[0] === 1 && nums[nums.length - 1] === nums.length) return 0
    
    let index1 = nums.indexOf(1)
    let indexN = nums.indexOf(nums.length)
        
    if (index1 < indexN) return index1 + (nums.length - 1 - indexN)
    else return index1 + (nums.length - 1 - indexN) - 1
    
};