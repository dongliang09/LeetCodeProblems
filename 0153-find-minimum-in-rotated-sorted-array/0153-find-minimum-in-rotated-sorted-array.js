/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    // ============ idea =========
    // since the given array is sorted and rotated
    // so that if first number of array is less than last number of array, 
    // that mean, the array is not rotated, so we can just return the first number
    // otherwise, loop through the array, if current element is greater than the next element, 
    // then we know it is the first element before it rotates
    
    // =========== code ==========
    if (nums[0] < nums[nums.length - 1]) return nums[0]
    else {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i+1]) return nums[i+1]
        }
    }
    
    return nums[0]
};

/*
# Rank 131,689
# Date 07/05/2023
# Runtime: 59 ms, faster than 58.51%
# Memory Usage: 42.2 MB, less than 29.07%
*/