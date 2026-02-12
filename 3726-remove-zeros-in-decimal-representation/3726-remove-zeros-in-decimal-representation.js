/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {

    let output = "";

    let str = n.toString();
    
    for (let i =0; i < str.length; i++) {
        let curr = str[i];
        if (curr !== '0') output += curr
    }

    return parseInt(output)

};