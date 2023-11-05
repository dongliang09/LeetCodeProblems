/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    
    let count = 1;
    let output = [];
    
    while (count <= target[target.length-1]) {
        output.push("Push");
        if (target.indexOf(count) == -1) {
            output.push("Pop");
        }
        count++;
    }
    
    return output;
    
};