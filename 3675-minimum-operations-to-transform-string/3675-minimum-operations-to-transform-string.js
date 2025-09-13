/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let alphabet = 'bcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < alphabet.length; i++) {
        if (s.indexOf(alphabet[i]) !== -1) 
          return (26 - (alphabet.charCodeAt(i) - 96)) % 26 + 1
    }

    return 0

};

/**
Date: 9/12/2025
Runtime: 0ms beats 100%
Memory: 73.97MB beats 97.88%

=============== first try =============
// fail on very long string

    let arr = [];
    let set = new Set();

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== 'a') {
            let letterCode = (26 - (s.charCodeAt(i) - 96)) % 26 + 1;
            if (arr.indexOf(letterCode === -1)) arr.push(letterCode)
            set.add(s[i])
        }
    }

    if (set.size === 0) return 0

    return Math.max(...arr)
 */