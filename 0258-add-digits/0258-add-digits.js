/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    let finalNum = num; 
    //console.log(finalNum.toString().length)
    let tempSum = 0;
    let splitNum = [];
    
    while(finalNum.toString().length > 1) {
        splitNum = finalNum.toString().split('');
        //console.log(splitNum)
        for (let i = 0; i < splitNum.length; i++) {
            tempSum += Number(splitNum[i]);
        }
        finalNum = tempSum;
        tempSum = 0;
        splitNum= [];
    }
    
    return finalNum;
};