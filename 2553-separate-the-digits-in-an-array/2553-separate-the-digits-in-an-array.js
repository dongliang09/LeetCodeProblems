/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    
    /**
     convert to string, split text, add to output array
     */

    let output = []

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i].toString()
        for (let j = 0; j < curr.length; j++) {
            output.push(Number(curr[j]))
        }
    }

    return output

};