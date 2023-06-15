/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    
    let nums = [0,1]
    
    if (n <= 1) return nums[n]
    
    for (let i = 2; i <= n; i++) {
        if ( i % 2 === 0) nums.push(nums[i / 2])
        else {
            let currI = Math.floor(i / 2)
            nums.push(nums[currI] + nums[currI+1])
        } 
    }
    
    // console.log(nums)
    
    return Math.max(...nums)
    
};