/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function(s1, s2) {
    let s1a = "", s1b ="", s2a = "", s2b = ""

    for (let i = 0; i < s1.length; i++) {
        if (i % 2 === 0) {
            s1a += s1[i];
            s2a += s2[i];
        } else {
            s1b += s1[i];
            s2b += s2[i];
        }
    }

    s1a = s1a.split('').sort().join('');
    s1b = s1b.split('').sort().join('');
    s2a = s2a.split('').sort().join('');
    s2b = s2b.split('').sort().join('');

    if (s1a === s2a && s1b === s2b) return true
    else return false
};