/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let set = new Set();

    
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }

    return set.size === 1 ? 0 : 1

};