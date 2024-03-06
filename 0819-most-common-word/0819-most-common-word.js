/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    
    // replace all symbols with empty space
    // count freq
    let freqObj = {};
    let wordArr = []
    let freqEntries = [];
    
    paragraph = paragraph.toLowerCase();
    paragraph = paragraph.replaceAll("!", ' ');
    paragraph = paragraph.replaceAll("?", ' ');
    paragraph = paragraph.replaceAll("'", ' ');
    paragraph = paragraph.replaceAll(";", ' ');
    paragraph = paragraph.replaceAll(",", ' ');
    paragraph = paragraph.replaceAll(".", ' ');
    
    // make sure there is no string with length of 0
    wordArr = paragraph.split(" ").filter(ele=>ele != "");
    
    for ( let i = 0; i < wordArr.length; i++) {
        let curr = wordArr[i];
        if (curr in freqObj) freqObj[curr]++;
        else freqObj[curr] = 1;

    }
    
    freqEntries = Object.entries(freqObj);
    freqEntries.sort((a,b)=> b[1]-a[1]);
    
    for (let i = 0; i < freqEntries.length; i++) {
        if (banned.indexOf(freqEntries[i][0]) === -1) return freqEntries[i][0]
    }
    
    
};


/*
============== test case ==========
"a, a, a, a, b,b,b,c, c"
["a"]
"..Bob hit a ball, the hit BALL flew far after it was hit."
["hit"]
*/