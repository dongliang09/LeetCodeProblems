/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    
    
    let visited = new Set()
    let output = 0;
    
    for (let i = 0; i < words.length; i++) {
        let current = words[i]
        if (visited.has(current)) output++ 
        else {
            visited.add(current.split("").reverse().join(""))
        }
    }
    return output
};