/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {

    if (nums.length === 1) return nums[0]

    for (let i = 0; i < nums.length; i++) {
        //check the first number
        if (i === 0 && nums[i] !== nums[i + 1]) return nums[i]
        //check last number
        if (i === nums.length - 1 && nums[i] !== nums[i - 1]) return nums[i]

        //check middle
        if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) return nums[i]

    }
    
    return nums[0]
};

/**
Rank 231,352
Runtime: 83 ms, faster than 16.34%
Memory Usage: 45 MB, less than 52.92%
 */