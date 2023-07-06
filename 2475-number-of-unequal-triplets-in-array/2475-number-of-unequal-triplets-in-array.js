/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    
    let output = 0
    
    for (let i = 0; i < nums.length; i++) {
        
        for (let j = i + 1; j < nums.length; j++) {
            
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] != nums[j] && nums[i] != nums[k] && nums[j] != nums[k]) output++
            }
        }
    }

    return output
    
};

/*
============ first try =====

// need to account for index

    let distinctNum = new Set()
    
    for (let i = 0; i < nums.length; i++) {
        distinctNum.add(nums[i])
    }
    
    let numLen = distinctNum.size
    
    if (numLen < 3) return 0
    
    return 0.5*(1 + numLen -2)*(numLen - 2)

*/