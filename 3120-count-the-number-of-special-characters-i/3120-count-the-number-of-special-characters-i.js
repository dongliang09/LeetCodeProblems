/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    
    let visited = new Set();
    let output = 0;
    
    for (let i = 0 ; i < word.length; i++) {
        if (word[i] <= "z" && word[i] >= "a" && !visited.has(word[i])) visited.add(word[i])
    }
    
    let visitedArr = [...visited];
    
    for (let i = 0 ; i < visitedArr.length; i++) {
        let currLetter = visitedArr[i].toUpperCase()
        if (word.indexOf(currLetter) !== -1) output++;
    }
    
    return output
    
};

/*
Date: 04/26/2024
Runtime: 60 ms, faster than 81.72% 
Memory Usage: 51.2 MB, less than 73.31% 
*/