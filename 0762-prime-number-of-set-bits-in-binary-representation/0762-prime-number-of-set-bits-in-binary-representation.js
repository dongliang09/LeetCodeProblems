/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {

    let output = 0;

    for (let i = left; i <= right; i++) {
        let str = i.toString(2);
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[j] === '1') count++;
        }

        // max count is about 20 for input less than 10^6
        if (count === 2 || count === 3 || count === 5 || count === 7 || count === 11 || count === 13 || count === 17 || count === 19) output++
    }
    
    return output
};