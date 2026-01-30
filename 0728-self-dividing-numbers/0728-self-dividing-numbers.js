/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {

    let output = []

    for ( let i = left; i <= right; i++) {
        let curr = i.toString();
        let digits = curr.split("");
        let isSelfDividng = true
        for (let j = 0; j < digits.length; j++) {
            if (i % parseInt(digits[j]) !== 0) {
                isSelfDividng = false
                break;
            }
        }
        if (isSelfDividng) output.push(i)
    }

    return output
    
};