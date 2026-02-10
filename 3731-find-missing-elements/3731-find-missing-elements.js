/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    
    let output = []
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    for (let i = min + 1; i < max; i++) {
        if (nums.indexOf(i) === -1) output.push(i)
    }

    return output
};