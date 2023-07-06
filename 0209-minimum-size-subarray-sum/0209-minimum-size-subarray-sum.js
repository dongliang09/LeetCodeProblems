/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    // ============ idea =============
    // if any of the element inside the array is same as target, the length is 1
    // otherwise loop through the array,
    // each element can be starting point, and have a current sum, 
    // if we add each element and is less than target, then we know the rest won't reach target
    // if we can reach target, compare to the output (which is Infinity by default) and current count
    // at the end, if output still infinity, then we know none of them reach output, return 0
    
    // ============ code =============
    
    let output = Infinity
    let isReachedEnd = false
    
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        if (!isReachedEnd) {
            if (nums[i] === target) {
                output = 1
                break
            } 
            for (let k = 1; k < nums.length - i + 1; k++) {
                sum += nums[i + k - 1]
                if ( sum >= target) {
                    if (k < output) {
                        output = k
                    }
                    break
                } else {
                    if (k === nums.length - i)
                        isReachedEnd = true
                }
            }
            
        }
        
    }
    
    if (output === Infinity) output = 0
    
    return output
    
};


/*
# Rank 131,689
# Date 07/05/2023
# Runtime: 2250 ms, faster than 5.05%
# Memory Usage: 46.2 MB, less than 54.51%
============= test case =========
15
[1,2,3,4,5]

*/