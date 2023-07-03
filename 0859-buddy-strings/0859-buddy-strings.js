/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    
    
    // ========== idea ==============
    
    // if two strings are match, check the letter of occurance, if one letter occurs twice, it passes
    
    // if two strings are not match, store the 1st and 2nd index of mismatch
    // as we loop through the string, if we have some values for both index, and we still find mismatch, it fails
    // if we only have one place of mismatch, it also fails
    // if it has exctly 2 mismatch, check if the letter of those index are swap
    
    // ========== code ==============
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
# Rank 136,719
# Date 07/03/2023
# Runtime: 53 ms, faster than 98.07%
# Memory Usage: 42.7 MB, less than 76.06%

======== test case =======
"ab"
"ca"
=> false
*/