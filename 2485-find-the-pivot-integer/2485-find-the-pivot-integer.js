/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {

    if (n === 1) return 1

    for (let i = 1; i < n; i++) {
        let leftSum = (1 + i) * i / 2;
        let rightSum = (i + n) * (n - i + 1) / 2;
        if (leftSum === rightSum) return i
    }

    return -1
    
};