/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    
    // =========== idea ============
    // take the first logs as default
    // loop through the logs array, check if the difference is greater than max,
    // it if is, take the id to update output
    // if it is the same as max, compare the id,
    // if id is smaller, update the output
    
    //============ code ============
    
    let maxTime = logs[0][1]
    let output = logs[0][0]
    
    for (let i = 1; i < logs.length; i++) {
        if (logs[i][1] - logs[i - 1][1] >  maxTime) {
            maxTime = logs[i][1] - logs[i - 1][1]
            output = logs[i][0]
        } else if (logs[i][1] - logs[i - 1][1] === maxTime) {
            if (logs[i][0] < output) output = logs[i][0]
        }
    }
    
    return output
};

/*
# Rank 135,450
# Date 07/03/2023
# Runtime: 84 ms, faster than 35.14%
# Memory Usage: 46.1 MB, less than 97.30%
========= test case ==========
70
[[36,3],[1,5],[12,8],[25,9],[53,11],[29,12],[52,14]]
=> 12
*/