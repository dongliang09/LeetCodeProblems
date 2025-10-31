/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {

    let output = []
    let obj = {}

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        if (obj[curr] === undefined) obj[curr] = 1
        else output.push(curr)

        if (output.length >= 2) break;
    }

    return output
    
};