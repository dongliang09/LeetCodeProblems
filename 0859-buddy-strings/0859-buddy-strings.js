/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    
    if (s.length !== goal.length) return false
    
    if (s !== goal) {
        let index1 = -1, index2 = -1
        let hasMoreMistach = false
        
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== goal[i]) {

                if (index2 !== -1 && i === s.length - 1) {
                    hasMoreMistach = true
                    break
                }
                if (index1 === -1) index1 = i
                else index2 = i
            }
        }
        
        if (hasMoreMistach) return false
        if (index2 === -1) return false
        
        if (s[index1] === goal[index2] && s[index2] == goal[index1]) return true
        else return false
           
    } else {
        let countObj = {}
        let hasDuplicate = false
        for (let i = 0; i < s.length; i++) {
            if (s[i] in countObj) {
                hasDuplicate = true
                break
            }
            else countObj[s[i]] = 1
        }
        
        if (hasDuplicate) return true
        else return false
        
    }
    
    return false
    
};

/*
======== test case =======
"ab"
"ca"
=> false
*/