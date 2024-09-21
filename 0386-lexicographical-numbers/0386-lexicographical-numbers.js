/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    
    let output = []
    
    for (let i = 1; i <= n; i++) {
        output.push(i)
    }
    
    output.sort()
    
    return output
    
};

/*
Date: 09/20/2024
Runtime: 63 ms, faster than 97.32% 
Memory Usage: 59 MB, less than 25.00% 
*/