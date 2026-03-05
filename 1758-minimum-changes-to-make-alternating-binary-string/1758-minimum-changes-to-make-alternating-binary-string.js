/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {

    let count1 = 0;
    let count2 = 0;
    let out = s.length;

    // start with 0
    for (let i = 0; i < s.length; i++) {
        let curr = s[i]
        if ( (i % 2 === 0) && (curr !== '0')) count1++
        else if ( (i % 2 === 1) && (curr !== '1')) count1++
    }

    // start with 1
    for (let i = 0; i < s.length; i++) {
        let curr = s[i]
        if ( (i % 2 === 0) && (curr !== '1')) count2++
        else if (( i % 2 === 1) && (curr !== '0')) count2++
    }

    if (count1 < out) out = count1
    if (count2 < out) out = count2

    return out
};