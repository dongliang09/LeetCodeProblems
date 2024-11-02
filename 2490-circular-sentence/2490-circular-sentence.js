/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    
    let output = true;
    
    let sentenceArr = sentence.split(" ");

    for (let i = 1; i < sentenceArr.length; i++) {
        let prevWord = sentenceArr[i-1];
        let currWord = sentenceArr[i];
        if (prevWord[prevWord.length - 1] !== currWord[0]) {
            output = false;
            break;
        }
    }
    
    let lastWord = sentenceArr[sentenceArr.length - 1]
    
    if (lastWord[lastWord.length - 1] !== sentenceArr[0][0]) output = false
    
    return output
    
};