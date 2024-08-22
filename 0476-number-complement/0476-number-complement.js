/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    
    let remainderArr = [];
    let curr = num;
    let complementArr = [];
    let output
    
    while (curr >= 1) {
        if (curr % 2 === 0) remainderArr.push("0")
        else {
            remainderArr.push("1")
            curr--;
        }
        curr /= 2;
    }
    
    
    for ( let i = 0; i < remainderArr.length; i++) {
        let curr = remainderArr[remainderArr.length - i - 1];
        let complement = curr === "0" ? "1" : "0";
        complementArr.push(complement)
    }
    
    
    output = parseInt(complementArr.join(''), 2)
    
    return output
};

/*
Date: 08/21/2024
Runtime: 61 ms, faster than 16.00% 
Memory Usage: 49.2 MB, less than 19.50%
*/