/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
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
============= test case =========
15
[1,2,3,4,5]

*/