/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    
    let output
    let str = n.toString() 
    let sum = 0
    let newStr = ""
    let newNum

    for (let i = 0; i < str.length; i++) {
        let curr = str[i]
        if (curr !== '0') {
            newStr += curr
            sum += Number(curr)
        }
    }

    newNum = Number(newStr)

    output = newNum * sum

    return output
    
};