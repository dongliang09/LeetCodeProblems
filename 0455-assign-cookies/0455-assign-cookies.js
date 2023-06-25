/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    
    let output = 0
    let bound = g.length < s.length ? g.length : s.length
    g.sort((a,b)=>b-a)
    s.sort((a,b)=>b-a)
    let sIndex = 0
    
    for (let i = 0; i < g.length; i++) {
        if (g[i] <= s[sIndex]) {
            output++
            sIndex++
        }
    }
    
    return output
    
};

/*
========== test case =========

[10,9,8,7]
[5,6,7,8]
*/