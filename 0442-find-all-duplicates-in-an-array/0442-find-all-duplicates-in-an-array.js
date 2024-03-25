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
