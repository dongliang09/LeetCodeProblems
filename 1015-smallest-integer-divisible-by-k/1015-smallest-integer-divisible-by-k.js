/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    
    if (k % 2 === 0 || k % 5 === 0) return -1
    
    let n = 1
    let len = 1

    while ( n % k !== 0) {
        n = (n * 10 + 1) % k;
        len++;
    }

    return len
};

/**
=============== failed cases ==================
k= 5
k = 19
 */