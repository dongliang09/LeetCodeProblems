/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    
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
        
        // console.log("DiffArr", DiffArr)
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
        // console.log("key", firstKey, secondKey, currentKey)
        
        // keep track how many time it appears
        if (!freqCount[currentKey]) freqCount[currentKey] = 1
        else freqCount[currentKey]++
        
        // console.log(i, firstIndex, secondIndex)
        // check if the different one appears
        let countArr = Object.values(freqCount)
        if (countArr.length === 2) {
            let isAppearTwice = countArr.find(element => element >= 2)
            // console.log(countArr, isAppearTwice)
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
===================test case ============
["mll","edd","jii","tss","fee","dcc","nmm","abb","utt","zyy","xww","tss","wvv","xww","utt"]
*/