/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let missingNum = 0;
    
    nums.sort((a,b) => a-b);
    
    for (let i = 0; i < nums.length + 1; i++) {
        if (i !== nums[i]) {
            missingNum = i;
            break;
        }
    }
    
    return missingNum;
};



/*
rank
443,692
Runtime: 158 ms, faster than 20.63%
Memory Usage: 44 MB, less than 90.30%
*/