/**
 * @param {number[]} nums
 * @return {number}
 */
var maxStrength = function(nums) {
    
    if (nums.length === 1) return nums[0]
    
    let isPositive = false
    let product = 1
    
    let nonZero = nums.filter(num=> num!==0)
    
    let allNegative = nums.filter(num => num < 0).sort((a,b)=>b-a) // sort from biggest to smallest, -1,-2,-3 ...
    let allPositive = nums.filter(num => num > 0).sort((a,b)=>a-b) // sort from smallest to biggest, 1,2,3 ...
    let zeroLen = 0;
    zeroLen = nums.length - allNegative.length - allPositive.length
    
    for( let i = 0; i < nonZero.length; i++) {
        product *= nonZero[i]
    }
    
    if (zeroLen === nums.length ) return 0
    // we have zero and only 1 negative number
    if (zeroLen > 0 && allPositive.length === 0 && allNegative.length === 1) return 0
    
    if (product > 0) {
        return product
    } else {
        
        
        
        // if we have zero and other num are negative
        let newproduct = 1
        if (zeroLen > 0 && allPositive.length === 0) {
            for (let i = 1; i < allNegative.length; i++) {
                newproduct *= allNegative[i]
            }
            return newproduct
        }
        
        // if we only have negative numer
        if (zeroLen === 0 && allPositive.length === 0) {
            for (let i = 1; i < allNegative.length; i++) {
                newproduct *= allNegative[i]
            }
            return newproduct
        }
        
        return product / allNegative[0]
    }
    
};


/*
============test case=========

[0,-1] => 0 
[-9] => -9
[0,0,0,0,0,0,0,0,0,0,0,0,0]

*/