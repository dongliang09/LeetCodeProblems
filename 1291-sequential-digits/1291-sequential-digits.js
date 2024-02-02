/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    
    let output = [];
    
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