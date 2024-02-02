/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    
    let output = [];
    
    // generate number with that starting number and length
    // return number if found, else return undefined
    function generateNum (startingNum, length) {
        let num = startingNum;
        let str = startingNum.toString();
        

        for (let i = 1; i < length; i++) {
            if (num < 9) 
                str += (++num).toString();
        }    
        
        if (str.length === length)
            return parseInt(str);
        else 
            return undefined
    }
    
    for (let i = low.toString().length; i <= high.toString().length; i++) {
        
        for (let j = 1; j < 10; j++) {
            let genNum = generateNum(j,i);
            if (genNum !== undefined) {
                if (low <= genNum && genNum <= high) output.push(genNum)
            } 
        }
    }
    
    return output
    
};

/*
Date: 2/2/2024
Runtime: 45 ms, faster than 84.62%
Memory Usage: 48.8 MB, less than 5.13%
*/