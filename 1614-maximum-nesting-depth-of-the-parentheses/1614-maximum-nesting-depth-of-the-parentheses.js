/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    
    let leftCount = 0;
    let rightCount = 0;
    let output = 0;
    
    for (let i = 0; i< s.length; i++) {
        if (s[i] === "(") {
            leftCount++;
            let diff = leftCount - rightCount; 
            if (diff > output) output = diff
        } else if (s[i] === ")") {
            rightCount++;
        } 
    }
    
    return output
    
};