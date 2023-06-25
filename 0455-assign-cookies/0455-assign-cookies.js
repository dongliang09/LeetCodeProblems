/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    
    // =========== idea =========
    
    // reverse the array of child and cookie,
    // since the goal is to give the cookie to children as much as poiisble
    // give the biggest size cookie to the satisfy child 
    
    // =========== code =========
    let output = 0

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

# Rank 142,221
# Date 06/22/2023
# 88 ms, faster than 79.40%
# Memory Usage: 45.1 MB, less than 35.18%

========== test case =========

[10,9,8,7]
[5,6,7,8]
*/