/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    let words = sentence.split(" ");
    dictionary.sort().forEach(element => {
        for (let i = 0; i < words.length; i++) {
            if (words[i].startsWith(element)) words[i] = element;
        }
    })
    return words.join(" ");
    
};

/** 
Rank 225,112
Runtime: 210 ms, faster than 68.7%
Memory Usage: 51.7 MB, less than 60.92%
 */