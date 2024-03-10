/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {

    // define the first array as default common set
    // as we check other array, remove uncommon element
    if (nums.length === 1) return nums[0].sort((a,b)=>a-b);
    
    let commonSet = new Set(nums[0])

    for ( let i = 1; i < nums.length; i++) {
        let currSet = new Set(nums[i])
        for (const elem of commonSet) {
            if (!(currSet.has(elem))) {
              commonSet.delete(elem); 
            }
        }
    }
    
    return [...commonSet].sort((a,b)=>a-b)
    
};

/*
Date: 3/9/2024
Rank: 113,154
Runtime: 64 ms, faster than 52.12%
Memory Usage: 51.9 MB, less than 46.97%

*/
