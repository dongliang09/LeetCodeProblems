/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    
    let index = word.indexOf(ch);
    if (index === -1) return word
    else {
        let prefix = word.slice(0, index + 1);
        let reverse = prefix.split("").reverse().join("");
        return reverse + word.slice(index+1);
    }
    
};

/*
Date: 5/1/2024
Rank: 109,638
Runtime: 47 ms, faster than 83.72% 
Memory Usage: 48.5 MB, less than 84.50%
*/