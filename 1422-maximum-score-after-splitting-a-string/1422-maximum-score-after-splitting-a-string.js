/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    
    let max = 0;
    
    for (let i = 1; i < s.length; i++) {
        let left = 0; // count how many 0
        let right = 0; //count how many 1
        
        for ( let j = 0; j < i; j++) {
            if (s[j] === "0") left++; 
        }
        
        for ( let j = i; j < s.length; j++) {
            if (s[j] === "1") right++; 
        }
        
        if (left + right > max) max = left + right 
        
    }
    
    return max
    
    
};