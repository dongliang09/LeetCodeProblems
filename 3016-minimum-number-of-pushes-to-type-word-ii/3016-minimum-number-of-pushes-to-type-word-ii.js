/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    
    let freqObj = {}
    
    for (let i = 0; i < word.length; i++) {
        let letter = word[i]
        if (freqObj[letter] ===  undefined) freqObj[letter] = 1;
        else freqObj[letter]++;
    }
    
    
    let freq = Object.values(freqObj).sort((a,b)=> b - a)
    let output = 0;
    // console.log(freq)
    
    
    for(let i = 0; i < Math.min(8, freq.length); i++) {
        output += freq[i]
    }
    
    // console.log(output)
    if (freq.length >= 8) {
        for(let i = 8; i < Math.min(16, freq.length); i++) {
            output += (freq[i] * 2)
        }
    }
    // console.log(output)
    if (freq.length >= 16) {
        for(let i = 16; i < Math.min(24, freq.length); i++) {
            output += (freq[i] * 3)
        }
    } 
    // console.log(output)
    if (freq.length > 24)  {
        for(let i = 24; i < Math.min(26, freq.length); i++) {
            output += (freq[i] * 4)
        }
    }
    
    return output
    
};