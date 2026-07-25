/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    
    /**
        first get all the digit, then use to loop to find the max product
     */

    let len = n.toString().length
    let num = n
    let arr = []
    let output = 0

    for (let i = 1; i <= len; i++) {
        let remainder = num % 10
        arr.push(remainder)
        num = (num - remainder) / 10
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] * arr[j] > output) output = arr[i] * arr[j]
        }
    }

    return output
};