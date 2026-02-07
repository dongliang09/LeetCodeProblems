/**
 * @param {string} s
 * @return {number}
 */
var residuePrefixes = function(s) {
    
    let count = new Set()
    let res = 0

    for (let i = 0; i < s.length; i++) {
        count.add(s[i])
        if (count.size === (i+1) % 3) res++;
    }

    return res
};

/**
=========== failed cases ==========
"bbbb" --> reason: I read the prompt wrong
 */