/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    
    let freqObj = {}
    let maxFreq = 0;
    let output = edges[0][0]
    
    for (let i = 0; i < edges.length; i++) {
        let curr = edges[i];
        
        if (freqObj[curr[0]] === undefined) freqObj[curr[0]] = 1
        else freqObj[curr[0]]++
        
        if (freqObj[curr[1]] === undefined) freqObj[curr[1]] = 1
        else freqObj[curr[1]]++
        
    }
    
    let freqEntries = Object.entries(freqObj)

    for (let i = 0; i < freqEntries.length; i++) {
        let curr = freqEntries[i];
        if (curr[1] > maxFreq) {
            maxFreq = curr[1];
            output = curr[0]
        }
    }
    
    return output
};

/*
Date: 6/27/2024
Rank: 110,124
Runtime: 163 ms, faster than 12.76% 
Memory Usage: 81.4 MB, less than 9.05% 
*/