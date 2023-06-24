/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    
    let output = 0;
    let words = s.split(" ")
    
    for(let i = 0; i < words.length; i++) {
        if (words[i].length) output++
    }
    
    return output
};