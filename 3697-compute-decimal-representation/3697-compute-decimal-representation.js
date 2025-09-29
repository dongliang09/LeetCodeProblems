/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function(n) {

    let output = []
    let power = 0

    do {
        let lastDigit = n % 10;
        if (lastDigit !== 0) output.push(lastDigit * Math.pow(10, power))
        n = (n - lastDigit) / 10
        power++;

    } while ( n !== 0)

    return output.reverse()
    
};