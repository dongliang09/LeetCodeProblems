/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {

    if (nums[0] > nums[1]) return false

    let currStage = 1

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];
        let prev = nums[i-1];
        if (curr === prev) return false
        if (currStage === 1) {
            if (prev > curr) currStage++;
        } else if (currStage === 2) {
            if (prev < curr) currStage++;
        } else if (currStage === 3) {
            if (prev > curr) return false
        }
    }

    if (currStage !== 3) return false

    return true
};


/**
================== failed cases ==============
[1,2,3]
[8,8,2,6]
[1,6,6,3,7]
 */