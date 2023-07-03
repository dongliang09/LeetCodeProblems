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