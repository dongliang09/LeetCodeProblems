/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    
    let output = 0
    
    for (let i = 0; i < logs.length; i++) {
        let curr = logs[i]
        if (curr === "./") {
            output = output
        } else if (curr === '../') {
            if(output > 0) output -= 1;
        } else {
            output++;
        }
    }
    
    return output
    
};

/*
Date: 07/09/2024
Runtime: 69 ms, faster than 6.20% 
Memory Usage: 49.2 MB, less than 66.53% 
*/