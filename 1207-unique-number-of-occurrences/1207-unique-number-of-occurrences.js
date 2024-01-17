/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    // count frequence of number
    let numFreq = {};
    arr.forEach(number => {
        numFreq[number] === undefined ? numFreq[number] = 1 : numFreq[number]++;
    })
    
    //count frequence of occurrance
    let values = Object.values(numFreq);   
    let occurFreq = {};
    values.forEach(number => {
        occurFreq[number] === undefined ? occurFreq[number] = 1 : occurFreq[number]++;
    })
    
    //if all frequence of occurrance === 1, then return true
    let occurValues = Object.values(occurFreq);  
    for (let i = 0 ; i < occurValues.length; i++) {
        if (occurValues[i] !== 1) return false;
    }
    
    return true;
    
};

/*
Rank 267,888
Runtime: 70 ms, faster than 86.66% 
Memory Usage: 42.4 MB, less than 76.51% 
*/