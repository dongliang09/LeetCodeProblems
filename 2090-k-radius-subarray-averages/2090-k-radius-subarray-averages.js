/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    
    let output = new Array(nums.length).fill(-1)
    let currWindowSum = 0
    let calAvgLen = 2 * k +1
    
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
========== test case ==============

[40527,53696,10730,66491,62141,83909,78635,18560]
2

*/