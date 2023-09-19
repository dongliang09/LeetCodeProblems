/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    let repeatedNum = 0;
    nums.sort();
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            repeatedNum = nums[i]
        }
    }
    
    return repeatedNum;
    
};

/*
rank 443,692
Runtime: 535 ms, faster than 5.01%
Memory Usage: 54.2 MB, less than 41.65% 
*/