/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    
    let output = 0;
    let isThisWordConsistent = true
    
    for (let i = 0 ; i < words.length; i++) {
        
        isThisWordConsistent = true
        
        for (let j = 0; j < words[i].length; j++) {
            let currLetter = words[i][j];
            if (allowed.indexOf(currLetter) === -1) {
                isThisWordConsistent = false;
                break;
            }
        }
        if (isThisWordConsistent) output++;
    }
    
    return output
    
};

/*
Date: 09/11/2024
Runtime: 64 ms, faster than 99.17% 
Memory Usage: 57.7 MB, less than 94.49% 
*/