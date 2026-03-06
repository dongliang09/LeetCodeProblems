/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {

    let count = 0;
    let lastZeroIndex = -1

    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if (curr === '0' && s[i-1] === '1') {
            count++;
            lastZeroIndex = i;
        }
    }

    if (s[s.length-1] === '1' && s.length - 1 > lastZeroIndex && lastZeroIndex !== -1) count++

    if (count <= 1) return true
    else return false
    
};