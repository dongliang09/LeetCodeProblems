/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    
    // ================idea============
    // count letter frequency of each letter for each word in the array
    // if all have the same letter, take the minimum count, 
    // and store that many times into a output array
    
    //================== code ===============
    
    let output = []
    let freqCount = []
    
    
    // store frequency count of each word
    for (let i = 0; i < words.length; i++) {
        let currFreqCount = {}
        for (let j = 0; j < words[0].length; j++) {
            let currLetter = words[i][j]
            if (currFreqCount[currLetter]) currFreqCount[currLetter]++
            else currFreqCount[currLetter] = 1
        }
        freqCount.push(currFreqCount)
    }
    
    // first word will be used as reference 
    let firstWordFreqEntry = Object.entries(freqCount[0])
    
    // iterate each word inside the array
    for (let i = 0; i < firstWordFreqEntry.length; i++) {
        
        // take the first word's letter and count as reference
        let currLetter = firstWordFreqEntry[i][0]
        let currCount = firstWordFreqEntry[i][1]
        
        // check if letter exists in word, if not, count = 0
        // otherwise, take the minimun count
        for (let j = 0; j < freqCount.length; j++) {
            if (freqCount[j][currLetter]) {
                if (freqCount[j][currLetter] < currCount) {
                    currCount = freqCount[j][currLetter]
                }
            } else {
                currCount = 0;
                break
            }
        }
        
        // push that many times to output array
        for (let k = 0; k < currCount; k++) {
            output.push(currLetter)
        }
        
    }
    
    return output
    
    
    
};

// use array.every ?

/*
Rank 154,629
Date: 06/14/2023
Runtime: 111 ms, faster than 23.02%
Memory Usage: 51 MB, less than 18.16%

//=======================first try ===========
// didn't consider deplicates
    
    let output = []
    
    let firstWordLetter = words[0].split('');
    
    if (words.length === 1) return firstWordLetter
    
    for (let i = 0; i < words[0].length; i++) {
        
        let currentLetter = words[0][i]
        let isCommonLetter = true
        
        for (let j = 1; j < words.length; j++) {
            if (!words[j].includes(currentLetter)) {
                isCommonLetter = false
                break
            }
        }
        if (isCommonLetter) output.push(currentLetter)
    }
     
    return output

*/