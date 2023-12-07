/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    
    let currMax = -1;
    
    for (let i = 0; i < num.length - 2; i++) {
        if (num[i] === num[i+1] && num[i] === num[i+2] && Number(num[i]) > currMax) {
            currMax = Number(num[i]);
        }
    }
    
    if (currMax !== -1) {
        return String(currMax)+String(currMax)+String(currMax)
    } else {
        return ""
    }
       
};


/*
Rank 128,948
Runtime: 65 ms, faster than 17.37%
Memory Usage: 42.8 MB, less than 69.49%
*/