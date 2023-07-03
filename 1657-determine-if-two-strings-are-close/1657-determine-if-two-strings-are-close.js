/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    
    if (word1.length !== word2.length) return false
    
    let countObj1 = {}, countObj2 = {}
    
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] in countObj1) countObj1[word1[i]]++
        else countObj1[word1[i]] = 1
        
        if (word2[i] in countObj2) countObj2[word2[i]]++
        else countObj2[word2[i]] = 1
    }
    
    let key1 = Object.keys(countObj1).sort().join(",")
    let key2 = Object.keys(countObj2).sort().join(",")
    
    let value1 = Object.values(countObj1).sort().join(",")
    let value2 = Object.values(countObj2).sort().join(",")
    
    if (key1 === key2 && value1 === value2) return true
    else return false
    
};

/*
 ================== test case ==============
"uau"
"ssx"
*/