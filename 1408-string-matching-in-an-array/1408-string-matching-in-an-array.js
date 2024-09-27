/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    
    let output = [];
    
    // sort the array by length from shortest to longest
    // that way, we only need to compare the ones that is longer than the current word

    words.sort((a,b)=>a.length - b.length);
    
    for (let i = 0; i < words.length; i++) {
        let curr = words[i];
        
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].indexOf(curr) !== -1) {
                output.push(curr)
                break;
            }
        }
        
    }
    
    return output
    
};

/*
Date: 09/27/2024
Runtime: 52 ms, faster than 82.28% 
Memory Usage: 48.8 MB, less than 91.25%
*/