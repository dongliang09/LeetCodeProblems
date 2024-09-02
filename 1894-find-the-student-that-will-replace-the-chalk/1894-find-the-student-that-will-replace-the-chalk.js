/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    
    let sum = 0;
    let output = 0;
    
    for (let i = 0; i < chalk.length; i++) {
        
        let curr = chalk[i];
        if (k < curr) return i
        k -= curr;
        sum += curr;
        
    }
    
    if (k >= sum) k = k % sum;
    if (k === 0) return 0
    
    for (let i = 0; i < chalk.length; i++) {
        
        let curr = chalk[i]
        if (k < curr) return i
        k -= curr;
        
    }
    
    
    
    return output
};