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