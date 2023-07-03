/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    
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

========= test case ==========
70
[[36,3],[1,5],[12,8],[25,9],[53,11],[29,12],[52,14]]
=> 12
*/