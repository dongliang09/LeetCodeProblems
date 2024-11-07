/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === goal[0]) {
            let currStr = s.substring(i) + s.substring(0,i)
            if (currStr === goal) return true
        }
    }
    
    return false
};