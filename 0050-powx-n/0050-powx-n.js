/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    
    // return Math.pow(x, n)
    
    let isPositive = true
    let output = x
    
    if (x === 0) return 0
    else if (x === 1) return 1
    else if (x === -1) {
        if (n % 2 === 0) return 1
        else return -1
    }
    
    if (n < 0) {
        isPositive = false
        n = -n
    } else if (n === 0) return 1
    
    for (let i = 1; i < n; i++) {
       output *= x     
    }
    
    if (!isPositive) {
        output = 1 / output
    }
    return output
    
};

/*
======== test case =========
-1.00000
2147483647

*/