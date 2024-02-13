/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    let halfLetterLen = 0;
    let firstHalf = '';
    let secondHalf = '';
    
    for (let i = 0 ; i < words.length; i++) {
        
        let letterStr = words[i];
        if (letterStr.length === 1) {
            return letterStr;
        }
        
        if (letterStr.length / 2 % 2 === 0) halfLetterLen = letterStr.length / 2;
        else halfLetterLen =  Math.floor(letterStr.length / 2);
        
        firstHalf = letterStr.substring(0,halfLetterLen);
        secondHalf = letterStr.substring(letterStr.length- halfLetterLen, letterStr.length);
        
        if (firstHalf === secondHalf.split("").reverse().join("")) return letterStr;
    }
    
    return ""
};


/*

Rank 354,990
Runtime: 116 ms, faster than 78.29%
Memory Usage: 50.1 MB, less than 49.85%


*/