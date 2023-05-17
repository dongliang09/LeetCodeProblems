/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var twoNum = [];
    
    for (var i = 0; i< nums.length; i++) {
        
        for (var j = 1; j < nums.length; j++) {
            if ((nums[i] + nums[j] === target) && (twoNum.length === 0) && (i != j)){
                twoNum.push(i,j);
            }
        }
    }
    
    return twoNum;
    
};