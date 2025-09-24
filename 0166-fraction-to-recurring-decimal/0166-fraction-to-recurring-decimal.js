/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {

    // if remainder repeat, then the fraction is recurring
    let remainderArr = []
    let quotientArr = []
    let quotient, remainder;
    // only two conditions that division will be finish
    // remainder repeats, or remainder is 0
    let isDivisionFinished = false 
    let remainderArrIdx
    let isOutputNeg = false
    let outputNum

    if ( (numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0) ) isOutputNeg = true

    numerator = Math.abs(numerator)
    denominator = Math.abs(denominator)
    
    do {
        // continue division if remainder not repeat and it is not just added to array
        remainderArrIdx = remainderArr.indexOf(remainder)
        if (remainderArrIdx !== -1 && remainderArrIdx !== remainderArr.length - 1)
            break;
        // do division
        remainder = numerator % denominator
        quotient = (numerator - remainder) / denominator
        remainderArr.push(remainder)
        quotientArr.push(quotient)
        // console.log(remainder, remainderArr.indexOf(remainder))
        // check if we got 0 as remainder
        if (remainder === 0 ) isDivisionFinished = true
        //update numerator for next division
        numerator =  remainder * 10

    } while (!isDivisionFinished)

    // console.log(remainderArr, quotientArr, remainderArrIdx)
    if (isDivisionFinished) {
        if (quotientArr.length === 1) outputNum = quotientArr[0].toString()
        else outputNum = quotientArr[0].toString()+"."+quotientArr.slice(1).join("")
    } else {
        let nonRepeatPart = quotientArr[0].toString()+"."+quotientArr.slice(1, remainderArrIdx + 1).join("")
        let repeatPart = "("+quotientArr.slice(remainderArrIdx + 1).join("")+")"
        outputNum = nonRepeatPart + repeatPart
    }

    if (isOutputNeg) return "-" + outputNum
    else return outputNum
    
};