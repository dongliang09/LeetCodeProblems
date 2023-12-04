/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    const digitReverse = digits.reverse();
    const digitLength = digits.length;
    let oneArray = [1];
    let resultArray = [];
    let carryOver = 0;
    let tempSum = 0;
    
    for (let i = 0; i < digitLength; i++) {
        oneArray.push(0);
    }
    
    //Add two digits
    for (let i = 0; i < digitLength; i++) {
        tempSum = digitReverse[i] + oneArray[i] + carryOver; 
        carryOver = 0;
        //console.log(tempSum)
        if (tempSum >= 10) {
            tempSum -= 10;
            carryOver = 1;
        }
        resultArray.push(tempSum);
    }
    
    //In case of 1 + 1 for the left most digit need carry over
    if(carryOver === 1) {
        resultArray.push(1);
    }
    
    return resultArray.reverse();

    
};
// not working because result will be bigger than int safe max num
/*
var digitString = "";
    
    for (var i = 0; i < digits.length; i++) {
        digitString = digitString + String(digits[i]);      
    }
    console.log((Math.floor(digitString)))
    
    const arrOfDigits = Array.from(String(parseInt(digitString) + 1), Number);
    
    return arrOfDigits;
*/