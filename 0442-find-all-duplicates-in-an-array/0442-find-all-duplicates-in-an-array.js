/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    
    let firstIndex;
    let visited = new Set()
    let output = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (visited.has(nums[i]))
            output.push(nums[i])
        else 
            visited.add(nums[i])
        
    }
    
    return output;
    
};


/*
Date: 3/24/2024
Rank: 113,317
Runtime: 80 ms, faster than 77.43% 
Memory Usage: 61.3 MB, less than 34.17%
*/
