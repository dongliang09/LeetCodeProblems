/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    
    let freqCountS = {};
    let freqCountT = {};
    let freqCountSKey = [];
    let freqCountTKey = [];
    let output = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] in freqCountS) freqCountS[s[i]]++;
        else freqCountS[s[i]] = 1;
    }
    
    for (let i = 0; i < t.length; i++) {
        if (t[i] in freqCountT) freqCountT[t[i]]++;
        else freqCountT[t[i]] = 1;
    }
    
    freqCountSKey = Object.keys(freqCountS);
    freqCountTKey = Object.keys(freqCountT);
    

    // count the diff from string s to string t
    for (let i = 0; i < freqCountSKey.length; i++) {
        let currLetter = freqCountSKey[i];
        if (currLetter in freqCountT) {
            output += Math.abs(freqCountS[currLetter] - freqCountT[currLetter]);
        } else {
            output += freqCountS[currLetter]
        };
    }
    
    // count the diff from string t to string s
    for (let i = 0; i < freqCountTKey.length; i++) {
        let currLetter = freqCountTKey[i];
        if (!(currLetter in freqCountS)) {
            output += freqCountT[currLetter];
        };
    }
    
    
    return output / 2
};

/*


================== first try on count diff ===================
for (let i = 0; i < freqCountSEntry.length; i++) {
        let currLetter = freqCountSEntry[i][0];
        if (currLetter in freqCountT) {
            let freqDiff = Math.abs(freqCountSEntry[i][1] - freqCountT[currLetter]);
            if (quota >= freqDiff) {
                quota -= freqDiff;
                output += freqDiff;
            } else {
                output += freqDiff;
                quota = freqDiff - quota;
            }
        } else {
            output += freqCountSEntry[i][1]
        };
    }

*/