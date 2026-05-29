/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {

    /**
        convert number to string, add the sum, find the min
     */
    let output = Infinity
    
    for (let i = 0; i < nums.length; i++) {
        let currStr = nums[i].toString()
        let sum = 0
        for (let j = 0; j < currStr.length; j++) {
            sum += Number(currStr[j])
        }
        if (sum < output) output = sum
    }

    return output
    
};