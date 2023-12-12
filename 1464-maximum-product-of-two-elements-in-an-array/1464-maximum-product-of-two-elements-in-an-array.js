/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let max1 = 0;
    let max2 = 0;
    let maxIndex1 = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max1) {
            max1 = nums[i];
            maxIndex1 = i;
        }
    }
    

    
    nums.splice(maxIndex1, 1);
    

    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max2) {
            max2 = nums[i];
        }
    }
    
    
    return (max1 - 1)*(max2 - 1)
};


// rank 446,143
// Runtime: 105 ms, faster than 44.10%
// Memory Usage: 42.7 MB, less than 52.17%