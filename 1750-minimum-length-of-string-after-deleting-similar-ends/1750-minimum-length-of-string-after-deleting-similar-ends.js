/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    
    //---------- helper function --------
    function sameLetter(index, isDirectionRight) {
        // this function is used to check if the previous/next letter is same as the letter with given index
        // if it is same, return the last index of same letter
        
        let currIndex = index;
        let isNextLetterSame;
        
        if (isDirectionRight)
            isNextLetterSame = s[index] === s[index+1] ? true : false;
        else 
            isNextLetterSame = s[index] === s[index-1] ? true : false;
        
        while (isNextLetterSame) {
            if (isDirectionRight) {
                if (s[currIndex] === s[currIndex+1]) currIndex++;
                else isNextLetterSame = false;
            } else {
                if (s[currIndex] === s[currIndex-1]) currIndex--;
                else isNextLetterSame = false;
            }
            
        }      
        return currIndex
    }
    
    //----------------- main code ------------
    
    let startIndex = 0;
    let endIndex = s.length - 1;
    let startLetter = s[0];
    let endLetter = s[endIndex];
    
    let isDone = false;
    
    while (!isDone) {
        if (s[startIndex] === s[endIndex] && startIndex < endIndex) {
            startIndex = sameLetter(startIndex, true) + 1;
            endIndex = sameLetter(endIndex, false) - 1;
        } else {
            isDone = true;
        }
    }
    
    return endIndex - startIndex + 1 > 0 ? endIndex - startIndex + 1 : 0;
    
};

/*
Date: 3/4/2024
Runtime: 91 ms, faster than 13.16%
Memory Usage: 56.7 MB, less than 18.42% 
*/