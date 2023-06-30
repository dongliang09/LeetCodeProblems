/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
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