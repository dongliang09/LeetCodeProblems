/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    
    let t0 = 0;
    let t1 = 1;
    let t2 = 1;
    let result = 0;
    
    if (n === 0) {
        return t0;
    } else if (n === 1) {
        return t1;
    } else if (n === 2) {
        return t2;
    } else {
        for ( let i = 2; i < n; i++) {
            result = t0 + t1 + t2;
            t0 = t1;
            t1 = t2;
            t2 = result;
        }
        return result;
    }
};

/*
Rank 344,471
Runtime: 66 ms, faster than 88.43%
Memory Usage: 41.6 MB, less than 77.37% 
*/