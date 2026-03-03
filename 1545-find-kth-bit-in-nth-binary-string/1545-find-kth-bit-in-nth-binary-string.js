/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {

    let countN = 1;
    let curr = '0';

    if (n === 0) return '0'

    function invert(str) {
        let out = ""
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '0') out += '1'
            else out += '0'
        }
        return out
    }

    function reverse(str) {
        let out = ""
        for (let i = str.length - 1; i >= 0; i--) {
            out += str[i]
        }
        return out
    }

    while (countN < n) {
        curr = curr + '1' + reverse(invert(curr));
        countN++;
    }

    return curr[k-1]
};