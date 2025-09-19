/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function(nums) {
    let max = nums[0];
    let sum = 0;
    let output = []

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        if (curr > max) max = curr;
        let conversion = curr + max;
        sum += conversion;
        output.push(sum)
    }

    return output
};

/**
Date: 09/19/2025
 */