/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    
    if (nums.length === 0) return []
    
    let startIndex = 0;
    let endIndex = 0;
    let output = [];
    
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
    if (startIndex === endIndex) {
        output.push(String(nums[startIndex]))
    } else {
        output.push(String(nums[startIndex]) + "->" + String(nums[endIndex]))
    }
    
    return output
    
    
    
};