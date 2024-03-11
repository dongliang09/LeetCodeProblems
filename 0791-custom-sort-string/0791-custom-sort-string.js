/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    
    let freqObj = {};
    let visited = new Set();
    let sLetters = [];
    let outputArr = [];
    
    //count frequency
    for (let i = 0 ; i < s.length; i++) {
        if (s[i] in freqObj) freqObj[s[i]]++;
        else freqObj[s[i]] = 1;
    }
    
    //add the letter in order first
    for ( let i = 0; i < order.length; i++) {
        let currLetter = order[i];
        if (currLetter in freqObj) {
            visited.add(currLetter);
            for (let j = 0; j < freqObj[currLetter]; j++) {
                outputArr.push(currLetter)
            }
        }
    }
    
    // find other letter not in order, and add them to output array
    sLetters = Object.keys(freqObj);
    for (let i = 0; i < sLetters.length; i++) {
        let currLetter = sLetters[i];
        if (!visited.has(currLetter)) {
            for (let j = 0; j < freqObj[currLetter]; j++) {
                outputArr.push(currLetter)
            }
        }
    }
    
    return outputArr.join("");
    
};


/*
Date: 3/11/2024
Rank: 112,798
Runtime: 55 ms, faster than 58.57% 
Memory Usage: 49.1 MB, less than 62.70%
*/