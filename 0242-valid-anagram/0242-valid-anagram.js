/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let SSorted = s.split('').sort().join('');
    let TSorted = t.split('').sort().join('');
    
    //console.log(s,t)
    if(SSorted === TSorted) {
        return true
    } else {
        return false
    }
};


/*
Rank 393,171
Runtime: 102 ms, faster than 83.57%
Memory Usage: 49.6 MB, less than 7.99% 
*/