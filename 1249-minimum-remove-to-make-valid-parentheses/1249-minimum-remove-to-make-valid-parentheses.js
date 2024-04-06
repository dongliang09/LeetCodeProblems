/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let s1Arr = [];
    let s2Arr = [];
    let leftCount = 0;
    let rightCount = 0;
    
    // reading from left to right to remove non-needed right parentheses
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if(curr === "(") {
            leftCount++;
            s1Arr.push(curr);
        } else if (curr === ")") {
            if (leftCount !== 0) {
                leftCount--;
                s1Arr.push(curr);
            }
        } else {
            s1Arr.push(curr)
        }
    }
    
    // reading from right to left to remove non-needed left parentheses
    for (let i = s1Arr.length - 1; i >= 0; i--) {
        let curr = s1Arr[i];
        if(curr === ")") {
            rightCount++;
            s2Arr.push(curr);
        } else if (curr === "(") {
            if (rightCount !== 0) {
                rightCount--;
                s2Arr.push(curr);
            }
        } else {
            s2Arr.push(curr)
        }
    }
    
    return s2Arr.reverse().join("")
};

/*
Date: 04/06/2024
Runtime: 80 ms, faster than 45.86% 
Memory Usage: 63 MB, less than 6.78%
*/