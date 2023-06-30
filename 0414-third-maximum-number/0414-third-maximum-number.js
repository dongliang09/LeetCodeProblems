/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    // ========== idea ==========
    // have 3 vairables set to negative inifinity
    // loop through the array, 
    // if current number is greater than 1st max, then replace it with current, and pass old 1st max to 2nd max, old 2nd max pass to 3rd max
    // else if current number is greater than 2nd max and not the same as 1st max, do the smiliar to 1st max
    // else if current number is greater than 3nd max and not the same as 1st max or 2nd max, do smilar
    // final check, if 3rd max still is negative inifinity, that means we don't have third max
    
    // ========== code ==========
    
    let firstMax = -Infinity, secondMax = -Infinity, thirdMax = -Infinity
    
    for (let i = 0 ; i < nums.length; i++) {
        if (nums[i] > firstMax) {
            thirdMax = secondMax
            secondMax = firstMax
            firstMax = nums[i]
        } else if (nums[i] > secondMax && nums[i] !== firstMax) {
            thirdMax = secondMax
            secondMax = nums[i]
        } else if (nums[i] > thirdMax && nums[i] !== firstMax && nums[i] !== secondMax) {
            thirdMax = nums[i]
        }
        
    }
    
    if (thirdMax === -Infinity) return firstMax
    else return thirdMax
    
};

/*
# Rank 138,459
# Date 06/30/2023
# Runtime: 53 ms, faster than 95.41%
# Memory Usage: Memory Usage: 42.3 MB, less than 86.56%
============= test case ============
[1,2,2,5,3,5]
*/