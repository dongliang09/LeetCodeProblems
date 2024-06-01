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