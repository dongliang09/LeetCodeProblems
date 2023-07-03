/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    
    // =========== idea ============
    // reverse of XOR is XOR itself
    
    
    //============ code ============
    
    let output = [pref[0]]
    let currentXOR = pref[0]
    
    for (let i = 1; i < pref.length; i++) {
        let current = pref[i] ^ currentXOR
        output.push(current)
        currentXOR ^= current
        
    }
    
    return output
};

/*
# Rank 135,450
# Date 07/03/2023
# Runtime: 206 ms, faster than 64.20% 
# Memory Usage: 70.3 MB, less than 98.77%
*/