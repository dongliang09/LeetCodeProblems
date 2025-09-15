/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    
    let output = 0;
    let textArr = text.split(' ');

    if (brokenLetters.length === 26) return 0
    if (brokenLetters.length === 0) return textArr.length;

    
    for (let i = 0 ; i < textArr.length; i++) {
        let currWord = textArr[i]
        let isValid = true
        for (let j = 0; j < brokenLetters.length; j++) {
            let currLetter = brokenLetters[j]
            if (currWord.indexOf(currLetter) !== -1) {
                isValid = false
                break;
            }
        }
        if(isValid) output++;
    }

    return output
};