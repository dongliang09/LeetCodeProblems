/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let freqCount = {}
    for (let i = 0; i < nums.length; i++) {
        if (freqCount[nums[i]]) freqCount[nums[i]]++
        else freqCount[nums[i]] = 1
    }
    
    let freqCountArr = Object.entries(freqCount).sort((a,b)=> b[1]-a[1])
    
    let output = []
    for (i = 0; i < k; i++) {
        output.push(Number(freqCountArr[i][0]))
    }
    
    return output
    
};