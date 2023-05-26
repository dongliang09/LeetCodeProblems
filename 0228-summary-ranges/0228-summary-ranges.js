/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    
    if (nums.length === 0) return []
    
    let startIndex = 0;
    let endIndex = 0;
    let output = [];
    
    // run every element in array except the last one
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + 1 === nums[i+1]) {
            endIndex = i + 1
        } else {
            if (startIndex === endIndex) {
                output.push(String(nums[startIndex]))
            } else {
                output.push(String(nums[startIndex]) + "->" + String(nums[endIndex]))
            }
            
            startIndex = i + 1
            endIndex = i + 1
        }
    }
    
    //final check on the last element in the array
    if (startIndex === endIndex) {
        output.push(String(nums[startIndex]))
    } else {
        output.push(String(nums[startIndex]) + "->" + String(nums[endIndex]))
    }
    
    return output
     
};

/*
# Rank 172,180
# Date 5/26/2023
# Runtime: 47 ms, faster than 96.38%
# Memory Usage: 41.8 MB, less than 71.05%
*/