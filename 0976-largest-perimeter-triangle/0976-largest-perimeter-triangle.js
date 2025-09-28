/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {

    let output = 0

    //sort from longest to shorest
    nums = nums.sort((a,b)=> b-a)
    
    // start from the longest sides, if any form triangle, return it as output
    for (let i = 0; i < nums.length - 2; i++) {
        let side1 = nums[i]
        let side2 = nums[i + 1]
        let side3 = nums[i + 2]
        if (side1 + side2 > side3 && side2 + side3 > side1) {
            output = side1 + side2 + side3;
            break;
        }
    }

    return output
};