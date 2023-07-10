/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    
    
    // ========== idea ===========
    // sort the array from smallest to biggest, 
    // if the last element is not zero, then we know we need to keep making element zero
    // the first element that is not zero will be our subtracting value every time we loop through the array
    
    
    // ========== code ===========
    let output = 0
    
    nums.sort((a,b)=>a-b)
    
    while (nums[nums.length - 1] !== 0) {
        let currentMin = nums.find(element=>element !== 0)
        for (let i = 0;  i < nums.length; i++) {
            if (nums[i] !== 0) {
                nums[i] -= currentMin
            }
        }
        output++
        
    }
    
    return output
};

/*
# Rank 127,866
# Date 07/10/2023
# Runtime: 80 ms, faster than 8.55% 
# Memory Usage: 41.9 MB, less than 77.78%
*/