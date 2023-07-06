/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    
    let output = 0
    
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i + 1; j < arr.length; j++) {
            
            for (let k = j + 1; k < arr.length; k++) {
                if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) output++
            }
        }
    }

    return output
    
};

/*

# Rank 130,529
# Date 07/06/2023
# Runtime: 70 ms, faster than 77.48%
# Memory Usage: 41.8 MB, less than 74.39%
*/