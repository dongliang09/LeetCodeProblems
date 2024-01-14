/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    
    // ========== idea ==============
    
    // since we can do opeartion 1 and 2 as many times as necessary
    // that mean order doens't matter
    // we can only tranform existing character to another existing character, so we only care about the frequency of letters
    // so we just need to record what letter occur, and frequency of letters
    // and letter doesn't need to align with frequency since we can transform letters
    
    // ========== code ==============
    
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

# Rank 136,719
# Date 07/03/2023
# Runtime: Runtime: 232 ms, faster than 33.77% 
# Memory Usage: 50.3 MB, less than 53.28%

 ================== test case ==============
"uau"
"ssx"
*/