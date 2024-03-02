/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var newArray = [];
    
    for (var i = 0; i < nums.length; i++) {
        newArray.push(Math.pow(nums[i], 2));
    }
    
    newArray.sort((function (a, b) {
          return (a - b);
        }));
    
    return newArray;
    
};