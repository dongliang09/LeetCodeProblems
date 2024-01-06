/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {

    //char code 64 A - Z ,  96 a-z 

    let Firstlowercase = true;

    if (word.length > 1) {
        if (word.charCodeAt(0) -65 < 26) {
            Firstlowercase = false;
        }

        if(Firstlowercase) {
            //if first letter is lowercase, return false if any of rest is uppercase
            for (let i = 1; i < word.length; i++) {
                if (word.charCodeAt(i) -65 < 26) {
                    return false;
                }
            }
        } else {
            let secondLowercase = true;
            if (word.charCodeAt(1) -65 < 26) {
                secondLowercase = false;
            }

            if (secondLowercase) {
                for (let i = 1; i < word.length; i++) {
                    if (word.charCodeAt(i) -65 < 26) {
                        return false;
                    }
                }
            } else {
                for (let i = 1; i < word.length; i++) {
                    if (word.charCodeAt(i) -64 > 26) {
                        return false;
                    }
                }
            }

        }
    } else return true
    
    return true;
};


/*
Rank 243,693
Runtime: 58 ms, faster than 97.2%
Memory Usage: 42.5 MB, less than 26.83%
*/