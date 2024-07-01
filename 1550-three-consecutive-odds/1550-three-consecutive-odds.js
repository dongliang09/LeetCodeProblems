/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    
    let count = 0;
    let output = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            count++;
        } else {
            count = 0;
        }
        
        if (count === 3) {
            output = 1;
            break;
        }
    }
    
    if (output === 1) {
        return true
    } else {
        return false;
    }
    
};


// rank 456,183
// Runtime: 119 ms, faster than 5.29%
// Memory Usage: 41.7 MB, less than 93.12%