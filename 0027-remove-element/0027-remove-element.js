/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    var count = 0;
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i,1);
            count++;
            nums.push('_');
            i--;
        }
    }
    
    return (nums.length - count);
    
};