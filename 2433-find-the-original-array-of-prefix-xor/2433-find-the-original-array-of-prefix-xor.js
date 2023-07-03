/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    
    let output = [pref[0]]
    let currentXOR = pref[0]
    
    for (let i = 1; i < pref.length; i++) {
        let current = pref[i] ^ currentXOR
        output.push(current)
        currentXOR ^= current
        
    }
    
    return output
};