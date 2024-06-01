/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    
    let diffArr = [];
    let output = 0;
    
    for (let i = 0; i < s.length - 1; i++) {
        diffArr.push(Math.abs(s.charCodeAt(i) - s.charCodeAt(i+ 1)));
    }
    
    for (let i = 0; i < diffArr.length; i++) {
        output += diffArr[i];
    }
    
    return output
    
};

/*
Date: 05/31/2024
Runtime: 74 ms, faster than 9.81%
Memory Usage: 51.1 MB, less than 22.50%*/