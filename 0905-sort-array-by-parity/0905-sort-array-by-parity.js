/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    
    let oddArray = [];
    let evenArray = [];
    
    for (let i = 0; i < nums.length; i++) {
        if ( nums[i] % 2 === 1) {
           oddArray.push(nums[i]);
       } else {
           evenArray.push(nums[i]);
       }
    }
    
    return evenArray.concat(oddArray);
    
};

//rank 473,852