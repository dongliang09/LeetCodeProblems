/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    
    let countLate = 0;
    let isLateMoreThan3 = false;
    let countAbsent = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            countAbsent++;
            if (countAbsent >= 2) return false;
        } else if (s[i] === 'L') {
            if (i + 2 < s.length && s[i+1] === 'L' && s[i+2] === 'L') return false
        }
    }
    
    return true
    
};