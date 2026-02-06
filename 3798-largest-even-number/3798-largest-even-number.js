/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function(s) {
    
    if (s[s.length - 1] === '2') return s

    while( s[s.length - 1] !== '2' && s.length !== 0) s = s.slice(0, -1)

    return s
};