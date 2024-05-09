/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    
    let vowels = 'aeiou';
    let consonant = 'bcdfghjklmnpqrstvwxyz';
    let hasVowels = false;
    let hasConsonant = false;
    
    word = word.toLowerCase();
    
    if (word.length < 3) return false;
    
    if (word.indexOf('@') >= 0 || word.indexOf('#') >= 0 || word.indexOf('$') >= 0) 
        return false
    
    for (let i = 0 ; i < vowels.length; i++) {
        if (word.indexOf(vowels[i]) >= 0) {
            hasVowels = true;
            break;
        }
    }
    
    for (let i = 0 ; i < consonant.length; i++) {
        if (word.indexOf(consonant[i]) >= 0) {
            hasConsonant = true;
            break;
        }
    }
    
    return  hasVowels && hasConsonant
    
    
};