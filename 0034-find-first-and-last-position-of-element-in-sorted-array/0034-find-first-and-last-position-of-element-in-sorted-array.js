/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let index1 = -1, index2 = -1;
    index1 = nums.indexOf(target);
    if (index1 === -1) index2 = -1;
    else {
        index2 = nums.length - 1 - nums.reverse().indexOf(target)
    }
    return [index1, index2]
};

/*
Rank 218,387
Runtime: 69ms, faster than 35.29%
Memory Usage: 42.5 MB, less than 56.78%
*/