/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let anagramsSet = new Set();
    let anagramsArray = [];
    
    let currentWord = '';
    let output = [];
    
    // find all the anagrams
    for (let i = 0; i < strs.length; i++) {
        anagramsSet.add(strs[i].split('').sort().join(''))
    }
    
    anagramsArray = [...anagramsSet]
    
    //count how many different anagrams
    for (let i = 0; i < anagramsArray.length; i++) {
        output.push([]);
    }
    
    //push each word
    for (let i = 0; i < strs.length; i++) {
        currentWord = strs[i].split('').sort().join('');
        for (let j = 0; j < anagramsArray.length; j++) {
            if (anagramsArray[j] === currentWord) {
                output[j].push(strs[i]);
            }
        }
    }
    
    return output
};


/*
Rank 393,171
Runtime: 1196 ms, faster than 5.00%
Memory Usage: 56.9 MB, less than 8.63%
*/