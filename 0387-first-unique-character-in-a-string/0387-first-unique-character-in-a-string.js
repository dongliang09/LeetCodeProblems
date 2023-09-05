/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let tempArray = s.split('').sort();
    let single = [];
    let count = 0;
    let index = -1;
    
    for (let i = 0; i < s.length - 1; i++) {
        
        if (tempArray[i] === tempArray[i + 1]) {
            count++;
        } else if (tempArray[i] !== tempArray[i + 1] && count === 0) {
            single.push(tempArray[i]);
        } else {
            count = 0;
        }
    }
    
    if (tempArray[s.length - 1] !== tempArray[s.length - 2]) {
        single.push(tempArray[s.length -1]);
    }
    
    for (let i = 0; i < s.length; i++) {
        
        if (single.includes(s[i])) {
            index = i;
            break;
        }
    }
    
    return index;
    
};





/*
Rank 397,767
Runtime: 412 ms, faster than 5.01%
Memory Usage: 52.8 MB, less than 6.63%
*/