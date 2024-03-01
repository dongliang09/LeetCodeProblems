/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    
    let countOnes = 0;
    let output = "";
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') countOnes++;
    }
    
    for (let i = 0; i < countOnes  - 1; i++) {
        output += '1';
    }
    
    for (let i = 0; i < s.length - countOnes; i++) {
        output += '0';
    }
    
    // last didgit must be 1
    output += '1'
    
    return output;
    
};

/*
Date: 2/29/2024
Rank: 119,680
Runtime: 80 ms, faster than 39.06%
Memory Usage: 52 MB, less than 84.71%
*/