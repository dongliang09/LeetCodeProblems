/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let set = new Set();

    
    for (let i = 0; i < nums.length; i++) {
        if (i !== 0 && !set.has(nums[i])) return 1
        set.add(nums[i]);
    }

    return 0

};

/**
Date: 09/12/2025
Runtime: 2ms beats 11.22%
Memory 56.10MB beats 28.91%
 */