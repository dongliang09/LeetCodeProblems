/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    
    // if we want to get the answer with one loop
    // we need to track the highest altitude and the current height
    // if current height is bigger than the highest altitude in record, replace it
    
    let max = 0
    let sum = 0
    
    for (let i = 0; i < gain.length; i++) {
        sum += gain[i]
        if (sum > max) max = sum
    }
    
    return max
};