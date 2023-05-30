/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    // use a loop to check every element inside the num array
    // inside the loop, check current element with next element, 
    // if they are the same, remove the next element
    // until we check every element inside the array
    // at the end, return the length of num array
    
    let bound = nums.length        
    for (let i= 0; i < bound - 1; i++) { 
        let current = nums[i]  
        let nextNum = nums[i + 1]  
        if (current === nextNum) {
            nums.splice(i+1, 1);  
            bound--;  
            i--; // decrement i if we need to stay on the same element
        }
    }
    
    return nums.length

    
};

/*
# Rank 166,451
# Date 5/30/2023
# Runtime: 139 ms, faster than 12.12%
# Memory Usage: 44.8 MB, less than 42.07%
*/

