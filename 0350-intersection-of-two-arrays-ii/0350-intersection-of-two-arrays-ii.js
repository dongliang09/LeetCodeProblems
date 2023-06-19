/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    // ========== idea ============
    // count frequency of each array, and store in separate objects
    // if both objects have the same key, compare their counts, take the minimun value,
    // push the key that many times into the output array
    
    //========= code ============
    
    let freqCount1 = {}, freqCount2 = {}
    let output = []
    
    for (let i = 0; i < nums1.length; i++) {
        if (freqCount1[nums1[i]]) freqCount1[nums1[i]]++
        else freqCount1[nums1[i]] = 1
    }
    
    for (let i = 0; i < nums2.length; i++) {
        if (freqCount2[nums2[i]]) freqCount2[nums2[i]]++
        else freqCount2[nums2[i]] = 1
    }
    
    
    let nums1Keys = Object.keys(freqCount1)
    
    for (let i = 0; i < nums1Keys.length; i++) {
        let current = nums1Keys[i]
        let currCount1 = freqCount1[current]
        let currCount2 = freqCount2[current]
        
        if (currCount1 && currCount2) {
            let minCount = currCount1
            if (currCount2 < currCount1) minCount = currCount2

            for (let j = 0; j < minCount; j++) {
                output.push(Number(current))
            }
        }
        
        
    }
    
    
    return output
    
};

/*
# Rank 144,707
# Date 06/19/2023
# Runtime: 74 ms, faster than 17.47%
# Memory Usage: 45.4 MB, less than 7.03%
*/