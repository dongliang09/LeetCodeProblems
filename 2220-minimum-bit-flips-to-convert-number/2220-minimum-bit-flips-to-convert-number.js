/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    
    let output = 0;
    
    let startBinary = start.toString(2);
    let goalBinary = goal.toString(2);
    
    if (startBinary.length > goalBinary.length) 
        goalBinary = goalBinary.padStart(startBinary.length,"0");
    else 
        startBinary = startBinary.padStart(goalBinary.length,"0");
    
    for (let i = 0; i < goalBinary.length; i++) {
        if (goalBinary[i] !==  startBinary[i]) output++;
    }
    
    return output
};

/*
Date: 9/11/2024
Runtime: 58 ms, faster than 32.61% 
Memory Usage: 48.9 MB, less than 63.77%
*/