/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    
    // =========== idea ============
    // reverse of XOR is XOR itself
    
    
    //============ code ============
    let output = [first]
    
    for (let i = 0; i < encoded.length; i++) {
        output.push(encoded[i] ^ output[output.length - 1])
    }
    
    return output
    
};

/*
# Rank 135,450
# Date 07/03/2023
# Runtime: Runtime: 89 ms, faster than 90.06%
# Memory Usage: 48.4 MB, less than 88.51%
*/