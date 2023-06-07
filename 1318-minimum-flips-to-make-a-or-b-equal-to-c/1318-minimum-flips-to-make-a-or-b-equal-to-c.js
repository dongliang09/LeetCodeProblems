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
    
    let maxLen = aBits.length
    if (bBits.length > maxLen) maxLen = bBits.length
    if (cBits.length > maxLen) maxLen = cBits.length
    
    aBits = aBits.padStart(maxLen, "0")
    bBits = bBits.padStart(maxLen, "0")
    cBits = cBits.padStart(maxLen, "0")
    // console.log(aBits, bBits, cBits)
    
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
        // console.log(output)
    }
    
    return output
    
};
/*
=============test case==========
8
3
5

*/