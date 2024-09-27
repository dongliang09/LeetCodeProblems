/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    
    let output = [];
    
    words.sort((a,b)=>a.length - b.length);
    
    for (let i = 0; i < words.length; i++) {
        let curr = words[i];
        
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].indexOf(curr) !== -1) {
                output.push(curr)
                break;
            }
        }
        
    }
    
    return output
    
};