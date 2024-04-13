/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    
    let output = [];
    
    for ( let curr = left; curr <= right; curr++) {
        let arr = curr.toString().split("");
        let isSelfDividing = true
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '0' || curr % Number(arr[i]) !== 0) {
                isSelfDividing = false;
                break;
            } 
        }
        if (isSelfDividing) output.push(Number(curr));
    }
    
    return output
};