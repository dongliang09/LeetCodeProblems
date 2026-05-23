/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {

    /**
        the array is already sorted from smallest to biggest, but rotated, 
        so in theory, there is only one time the previous number is bigger than the current number
     */
    let numRotation = 0
    
    for (let i = 1; i < nums.length;i++) {
        if (nums[i-1] > nums[i]) numRotation++;
        if (numRotation > 1) return false
    }
    
    // edge case
    if (numRotation >= 1 && nums[0] < nums[nums.length -1]) return false
    
    return true
};