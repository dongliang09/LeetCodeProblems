/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    nums.sort();
    
    let count = 1;
    let singleNum = nums[0];
    let preSingleNum = nums[0];
    
    
    for (let i = 1; i < nums.length; i++) { 
        if (count === 0 && nums[i] !== nums[i -1]) {
            count++;
        } else if (count === 1 && nums[i] === nums[i -1]) {
            count++;  
        } else if (count === 2 && nums[i] === nums[i -1]) {
            count++;
            // in case we overwrite the single num 
            singleNum = preSingleNum;  
        }
        
        // we could getting wrong single num 
        // example [1, 2, 2, 2] 
        if (count === 1 && nums[i] !== nums[i -1]) {
            preSingleNum = singleNum;
            singleNum = nums[i];
        }
        
        //reset count when we count up to 3
        if (count === 3) {
            count = 0;
        }
        
        
    }
    
    return singleNum;
    
};

/*
rank 443,692
Runtime: 119 ms, faster than 27.31%
Memory Usage: 42.5 MB, less than 85.17%
*/