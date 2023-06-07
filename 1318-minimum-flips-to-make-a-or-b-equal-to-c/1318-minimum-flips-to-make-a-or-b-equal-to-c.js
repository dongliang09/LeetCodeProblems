/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    
    let output = 0
    
    let aBits = a.toString(2)
    let bBits = b.toString(2)
    let cBits = c.toString(2)
    
    // find the max length among all 3
    let maxLen = aBits.length
    if (bBits.length > maxLen) maxLen = bBits.length
    if (cBits.length > maxLen) maxLen = cBits.length
    
    aBits = aBits.padStart(maxLen, "0")
    bBits = bBits.padStart(maxLen, "0")
    cBits = cBits.padStart(maxLen, "0")
    
    for (let i = 0; i < cBits.length; i++) {
        if ((aBits[i] | bBits[i]) !== Number(cBits[i])) {
            if (cBits[i] === '0') {
                // need both a and b to be 0
                if (aBits[i] === '1') output++
                if (bBits[i] === '1') output++
            } else {
                // only flip one from a or b
                output++
            }
        } 
    }
    
    return output
    
};

/*

# Rank 161,755
# Date 6/7/2023
# Runtime:  62 ms, faster than 27.08%
# Memory Usage:  41.5 MB, less than 87.50%

=============test case==========
8
3
5

*/