/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    
    let secondMin = nums[1] < nums[2] ? nums[1] : nums[2];
    let thirdMin = nums[1] < nums[2] ? nums[2] : nums[1];

    for (let i = 3; i < nums.length; i++) {
        let curr = nums[i]
        if (curr < thirdMin) {
            if (curr < secondMin) {
                thirdMin = secondMin
                secondMin = curr
            }
            else thirdMin = curr
        }
    }

    return nums[0] + secondMin + thirdMin
    
};