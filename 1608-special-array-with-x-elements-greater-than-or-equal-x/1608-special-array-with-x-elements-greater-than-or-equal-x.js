/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    
    nums.sort((a,b)=> a-b)
    
    let output = -1;
    
    for (let i = 0; i <= nums.length; i++) {
        let targetNum = nums.find(ele => ele >= i)
        let qualifiedNum = targetNum === undefined ? 0 : nums.length - nums.indexOf(targetNum);
        if (qualifiedNum === i) {
            output = i;
            break;
        } 
    }
    
    return output
    
};

/*
Date: 05/27/2024
Runtime: 54 ms, faster than 62.96% 
Memory Usage: 49.3 MB, less than 50.93%
*/