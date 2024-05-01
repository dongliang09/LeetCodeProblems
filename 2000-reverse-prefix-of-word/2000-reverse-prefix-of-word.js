/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    
    let index = word.indexOf(ch);
    if (index === -1) return word
    else {
        let prefix = word.slice(0, index + 1);
        let reverse = prefix.split("").reverse().join("");
        return reverse + word.slice(index+1);
    }
    
};