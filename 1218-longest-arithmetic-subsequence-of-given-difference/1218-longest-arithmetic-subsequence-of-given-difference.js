/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    
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