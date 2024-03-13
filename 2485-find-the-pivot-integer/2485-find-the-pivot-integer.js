/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    
    let pivot = -1;
    let frontSum = 0, backSum = 0;
    
    //add all the num
    for ( let i = 1; i <= n; i++) {
        backSum += i;       
    }
    
    // frontSum add all the num up to current number
    // backSum wil subtract the current number, 
    // in other word, sum of numbers after current number
    for ( let i = 1; i <= n; i++) {
        frontSum += i;
        
        if (frontSum === backSum) {
            pivot = i;
            break;
        }
        backSum -= i; 
    }
    
    return pivot;
    
};

/*
Rank 281,009
Runtime: 108 ms, faster than 100.00%
Memory Usage: 42.1 MB, less than 100.00% 
*/