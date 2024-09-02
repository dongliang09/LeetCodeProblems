/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    
    let sum = 0;
    let output = 0;
    
    // loop only once to get the sum of array
    for (let i = 0; i < chalk.length; i++) {
        let curr = chalk[i];
        if (k < curr) return i
        k -= curr;
        sum += curr; 
    }
    
    // in case, k is multiple of array's total sum
    if (k >= sum) k = k % sum;
    if (k === 0) return 0
    
    for (let i = 0; i < chalk.length; i++) {
        let curr = chalk[i]
        if (k < curr) return i
        k -= curr;
    }
      
    return output
};

/*
Runtime: 72 ms, faster than 84.34% 
Memory Usage: 59 MB, less than 95.18% 
*/