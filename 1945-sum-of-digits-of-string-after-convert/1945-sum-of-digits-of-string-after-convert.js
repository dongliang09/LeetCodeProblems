/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    
    let convertStr = '';
    let sum = 0;
    
    //convert string into number string
    for (let i = 0; i < s.length; i++) {
        convertStr += s.charCodeAt(i) - 96;
    }
    
    //console.log(convertStr)
    
    // add all the number of the string
    for (let j = 0; j < k; j++) {
        if (k > 1 && j !== 0) {
            convertStr = String(sum);
            sum = 0;
        }
        
        for (let i = 0; i < convertStr.length; i++) {
            sum += Number(convertStr[i]);
        }
    }
    
    
    return sum
};

/*
Rank 313,757
Runtime: 115 ms, faster than 33.55%
Memory Usage: 43.6 MB, less than 74.19% 
*/