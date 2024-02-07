/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
    let countObj = {};
    let output = ""; 
    
    for (let i = 0; i < s.length; i++) {
        countObj[s[i]] === undefined ? countObj[s[i]] = 1 : countObj[s[i]]++;
    }
    
    // console.log(countObj)
    
    let countEntries = Object.entries(countObj);
    
    countEntries.sort((a,b) => {
        return b[1] - a[1];
    })
    
    for (let i = 0; i < countEntries.length; i++) {
        for (let j = 0; j < countEntries[i][1]; j++) {
            output += countEntries[i][0]
        }
    }
    
    return output
};