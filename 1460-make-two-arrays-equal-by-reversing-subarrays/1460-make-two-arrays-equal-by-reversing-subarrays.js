/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    
    target.sort();
    arr.sort();
    
    for (let i = 0; i < target.length; i++) {
        if (target[i] !== arr[i]) return false
    }
    
    return true
};

/*
Date: 08/02/2024
Runtime: 62 ms, faster than 53.33%
Memory Usage: 50.9 MB, less than 67.22%
*/