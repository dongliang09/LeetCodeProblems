/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    
    let min = nums[0], max = nums[0]
    let output

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        if (curr < min) min = curr
        else if (curr > max) max = curr
    }

    for (let i = max; i >= 1; i--) {
        if (max % i === 0 && min % i === 0 ) {
            output = i;
            break;
        }
    }

    return output
};