/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {

    if (k === 1) return 0;
    
    nums.sort((a,b)=> a-b);
    let minDiff = nums[nums.length-1] - nums[0]

    for (i = k-1; i < nums.length; i++) {
        if (nums[i] - nums[i-k+1] < minDiff) minDiff = nums[i] - nums[i-k+1];
    }

    return minDiff

};