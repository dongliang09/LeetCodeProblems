/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    
    var posArray =[];
    var negArray =[];
    var newArray =[];
    
    for (var i = 0; i < nums.length; i++) {
         if (nums[i] > 0) {
            posArray.push(nums[i]);
         } else {
            negArray.push(nums[i]);
         }
    }
    
    for (var i = 0; i < nums.length / 2; i++) {
         newArray.push(posArray[i], negArray[i]);
    }
    
    return newArray;
};