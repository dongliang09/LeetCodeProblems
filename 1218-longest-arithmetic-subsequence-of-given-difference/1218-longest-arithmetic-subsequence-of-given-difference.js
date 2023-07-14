/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    
    // ============ idea ===============
    
    // we will have a set to track which number has appear, 
    // if the number re-appear, then means it is part of the subsequence we have tracked before
    // when we loop through the array, as long as the number is not in the set, 
    // we will find the the next element with exact difference, and update the current length
    
    // ============ code ===============
    
    
    let visited = new Set()
    
    let output = 0
    
    for (let i = 0; i < arr.length; i++) {
        let currentLen = 1
        let currentSum = arr[i]
        if (!visited.has(arr[i])) {
            for (let k = i + 1; k < arr.length; k++) {
                if ( arr[k] - currentSum === difference) {
                    currentLen++
                    currentSum += difference 
                    visited.add(arr[k])
                }
            }
            visited.add(arr[i])
        }
            
        if (currentLen > output) output = currentLen
    }
        
        return output
    
};


/*

# Rank 127,147
# Date 07/14/2023
# Runtime: 4590 ms, faster than 6.45%
# Memory Usage: 51.2 MB, less than 100.00%

*/