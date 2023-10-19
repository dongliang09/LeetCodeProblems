/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let prev1 = 0;
    let prev2= 1;
    let current = 0;
    
    if (n === 0) {
        return prev1;
    } else if ( n === 1) {
        return prev2;
    } else {
        for (let i = 1; i < n; i++) {
            current = prev1 + prev2;
            prev1 = prev2;
            prev2 = current;
        }
        return current;
    }
};


/*
Rank 344,471
Runtime: 62 ms, faster than 96.47%
Memory Usage: 41.5 MB, less than 92.60%

*/