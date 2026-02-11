/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function(nums) {

    let output = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        if (curr % 2 === 0) {
            output = output | curr;
            count++
        }
    }

    if (count === 0) return 0

    return output



    
};