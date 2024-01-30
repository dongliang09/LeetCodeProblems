/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    let sFreq = {};
    let tFreq = {};
        
    
    for (let i = 0; i < s.length; i++) {
        sFreq[s[i]] === undefined ? sFreq[s[i]] = 1: sFreq[s[i]]++;
        tFreq[t[i]] === undefined ? tFreq[t[i]] = 1: tFreq[t[i]]++;
        if(Object.values(sFreq).join('') !== Object.values(tFreq).join('')) return false;
    }
    return true;
    
};

/*
Rank 277,854
Runtime: 4026 ms, faster than 5.01% 
Memory Usage: 48.9 MB, less than 10.34%
*/