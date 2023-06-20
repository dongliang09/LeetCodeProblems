/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    
    //============ idea ==============
    // have output array to have the same length as nums aray, and fill it with -1
    // only update the applicable ones
    // we will first add the ones in first 2K + 1 elements, then slide the window
    // each time we slide, we subtract the head, and add the next element
    
    //============= code ===========
    
    let output = new Array(nums.length).fill(-1)
    let currWindowSum = 0
    let calAvgLen = 2 * k +1
    
    //edge case
    if ( nums.length < k * 2 + 1 ) return output 
    if (k === 0) return nums
        
    for (let i = 0; i <= k * 2; i++) {
        currWindowSum += nums[i]
    }

    for (let i = 0; i < nums.length - 2 * k; i++) {
        output[i + k] = Math.floor(currWindowSum / calAvgLen)
        currWindowSum = currWindowSum + nums[calAvgLen+ i] - nums[i]
        
    }
    
    return output

    
};


/*

# Rank 144,707
# Date 06/19/2023
# Runtime: 357 ms, faster than 80.98%
# Memory Usage: 88.8 MB, less than 37.42%

========== test case ==============

[40527,53696,10730,66491,62141,83909,78635,18560]
2

*/