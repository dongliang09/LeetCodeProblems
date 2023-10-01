/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    const wordsArray = s.split(' ');
    var singleArray = [];
    var finalString = '';
    var tempString = '';
    
    for (var i = 0; i < wordsArray.length; i++) {
        singleArray = String(wordsArray[i]).split('');
        singleArray.reverse();
        tempString = singleArray.join('');
        if (i != wordsArray.length -1 ) {
            finalString = finalString + tempString + ' '; 
        } else {
            finalString = finalString + tempString;
        }
    }
    
    return finalString;
};