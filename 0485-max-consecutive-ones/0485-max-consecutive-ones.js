/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    let max = 0;
    let tempMaxCount = 0;
    
    for (let i = 0; i < nums.length; i++) {
        
        if(nums[i] === 1) {
           tempMaxCount++;
        }
        
        if (nums[i] === 0 || i === (nums.length - 1)) {
            if (tempMaxCount > max) {
                max = tempMaxCount;
            }
            tempMaxCount = 0;
        } 
    }
    
    return max;
    
};

//rank 473,852