/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    var index = 0;
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            index = i;
            break;
        } else {
            index = i + 1;
        }
        
    }
    
    return index;
};