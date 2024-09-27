/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    
    const halfLength = nums.length / 2;
    const firstHalf = nums.slice(0, halfLength);
    const secondHalf = nums.slice(halfLength, halfLength* 2);
    var newArray = [];
    
    for (var i = 0; i < halfLength; i++) {
        newArray.push(firstHalf[i], secondHalf[i]);
    }
    
    return newArray;
};