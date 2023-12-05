/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    
    if (n===1) return 0
    
    let currNum = n;
    let matches = 0;
    let currMatch = 0;
    
    while (currNum > 2) {
        if (currNum % 2 === 0) {
            currMatch = currNum / 2;
            matches += currMatch;
            currNum = currMatch;
        } else {
            currMatch = (currNum + 1) / 2 - 1;
            matches += currMatch;
            currNum = currMatch + 1;
        }
    }
    
    return matches + 1
};