/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {

    let output = [];

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            let curr = words[j]
            if ((i !== j) && (words[i].indexOf(curr) !== -1) && output.indexOf(curr) === -1) {
                output.push(curr);
            }
        }
    }
    return output;
    
};

/*
Date: 01/06/2024
Runtime: 1ms Beats 94.33%
Memory: 49.18MB Beats 72.68%
*/