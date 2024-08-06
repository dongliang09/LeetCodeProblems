/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    
    let freqObj = {}
    
    //count frequency
    for (let i = 0; i < word.length; i++) {
        let letter = word[i]
        if (freqObj[letter] ===  undefined) freqObj[letter] = 1;
        else freqObj[letter]++;
    }
    
    // since we only cares about the frequency, so we don't need the letter
    let freq = Object.values(freqObj).sort((a,b)=> b - a)
    let output = 0;

    // based on the length of the frequency array, add the frequency * number of button push
    
    for(let i = 0; i < Math.min(8, freq.length); i++) {
        output += freq[i]
    }
    
    if (freq.length >= 8) {
        for(let i = 8; i < Math.min(16, freq.length); i++) {
            output += (freq[i] * 2)
        }
    }

    if (freq.length >= 16) {
        for(let i = 16; i < Math.min(24, freq.length); i++) {
            output += (freq[i] * 3)
        }
    } 

    if (freq.length >= 24)  {
        for(let i = 24; i < Math.min(26, freq.length); i++) {
            output += (freq[i] * 4)
        }
    }
    
    return output
    
};

/*
Date: 08/05/2024
Runtime: 185 ms, faster than 52.00%
Memory Usage: 60.2 MB, less than 76.00%
*/