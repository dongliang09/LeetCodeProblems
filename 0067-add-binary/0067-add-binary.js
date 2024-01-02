/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    let carryOver = 0;
    let aReverse = a.split('').reverse();
    let bReverse = b.split('').reverse();
    let maxLength = 0;
    let sumArray = [];
    let tempSum = 0;
    const ALength = aReverse.length;
    const BLength = bReverse.length;
    const LengthDiff = Math.abs(ALength - BLength);
    
    //console.log(LengthDiff)
    
    //find the max lenght of digits, filled with 0 for shorter one
    if (ALength > BLength) {
        maxLength = ALength;
    } else {
        maxLength = BLength;
    }
    
    if (ALength < maxLength) {
        for (let i = 0; i < LengthDiff; i++) {
            aReverse.push('0');
        }
    } else if (BLength < maxLength) {
        for (let i = 0; i < LengthDiff; i++) {
            bReverse.push('0');
        }
    }
    
    //console.log(aReverse, bReverse)
    
    //Add two digits
    for (let i = 0; i < maxLength; i++) {
        tempSum = Number(aReverse[i]) + Number(bReverse[i]) + carryOver; 
        carryOver = 0;
        //console.log(tempSum)
        if (tempSum >= 2) {
            tempSum -= 2;
            carryOver = 1;
        }
        sumArray.push(tempSum);
    }
    
    //In case of 1 + 1 for the left most digit need carry over
    if(carryOver === 1) {
        sumArray.push(1);
    }
    //console.log(sumArray)
    
    return sumArray.reverse().join('')
};