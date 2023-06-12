/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    
    //==============idea =================
    // we wil have an object to count thre frequency, with the difference integer array as key
    // since there is only one word differnt from all the others
    //  this object will have at most 2 keys
    // Once we have 2 pairs of key-values pairs in this object
    // one will have greater or equal to 2 count, the other one will have exactly one
    // the one with exactly one is what we want
    // At the same time, we have variables to track the index, so we can easily find the word
    
    
    
    // ============ codes ===================
    let freqCount = {} // use diff interger array as key
    let firstKey
    let secondKey
    let firstIndex = -1
    let secondIndex = -1
    
    for (let i = 0; i < words.length; i++) {
        // find the Difference interger array, and use that as key
        let DiffArr = []
        for (let j = 1; j < words[i].length; j++) {
            DiffArr.push(words[i].charCodeAt(j) - words[i].charCodeAt(j - 1))
        }
        
        let currentKey = ""
        // check if the key exists
        if (!firstKey) {
            firstKey = String(DiffArr)
            firstIndex = i
            currentKey = firstKey
        }
        else {
            if (String(DiffArr) !== firstKey) {
                secondKey = String(DiffArr)
                secondIndex = i
                currentKey = secondKey
            } else {
                currentKey = firstKey
            }
            
        }

        
        // keep track how many time it appears
        if (!freqCount[currentKey]) freqCount[currentKey] = 1
        else freqCount[currentKey]++
        

        // check if the different one appears
        let countArr = Object.values(freqCount)
        if (countArr.length === 2) {
            let isAppearTwice = countArr.find(element => element >= 2)
            if (isAppearTwice) {
                let appearTwice 
                if (freqCount[firstKey] >= 2) {
                    return words[secondIndex]
                } else {
                    return words[firstIndex]
                }
            }
        }
        

    }
    
    
    
    
};


/*

Rank 157,557
Date: 06/12/2023
Runtime: 47 ms, faster than 100.00% 
Memory Usage: 42.1 MB, less than 95.89%

===================test case ============
["mll","edd","jii","tss","fee","dcc","nmm","abb","utt","zyy","xww","tss","wvv","xww","utt"]
*/