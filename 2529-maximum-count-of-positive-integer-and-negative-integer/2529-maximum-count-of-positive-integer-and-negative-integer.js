/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    
    // since the array is already sorted, 
    // just need to find the index of first 0 and index of first positive number
    let output = 0
    
    let index0 = nums.indexOf(0)
    
    let positiveNum = nums.find(element => element > 0)
    let indexPositive = -1
    
    if (positiveNum !== undefined) {
        indexPositive = nums.indexOf(positiveNum)
    }
    
    // assume all(negative, positive, zero) have zero length
    let negLen = 0
    let posLen = 0
    let zeroLen = 0
    
    //final check on length with 2 cases, one with zero, one without
    if (index0 === -1) {
        
        // if the array has no positives or no negative, 
        // return the length of array
        // otherwise, the array has both negative and positives
        if (indexPositive === -1 || indexPositive === 0) return nums.length
        else {
            negLen = indexPositive
            posLen = nums.length - negLen
            return Math.max(negLen, posLen)
        }
    } else {
        
        // if the array only has 0, return 0
        if (nums[0] === 0 && nums[nums.length-1] === 0) return 0
        
        // if first index is 0, that means no negative numbers
        // if last index is 0, that means no positive numbers
        // otherwise, it is mix of negative, zero, and positive
        if (nums[0] === 0) return nums.length - indexPositive
        else if (nums[nums.length -1] === 0) return nums.length - index0
        else {
            negLen = index0
            zeroLen = indexPositive - index0
            posLen = nums.length - negLen - zeroLen
            return Math.max(negLen, posLen)
        }
        
    }
    
};

/*
# Rank 161,072
# Date 6/8/2023
# Runtime: 66 ms, faster than 46.26%
# Memory Usage: 44.4 MB, less than 66.74%
*/