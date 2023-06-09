/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    
    // since it is already sorted, we just need to find the one greater than the target
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] > target) return letters[i]
    }
    
    //return to first letter as default if nothing is greater than target
    return letters[0]
};

/*
# Rank 161,072
# Date 6/8/2023
# Runtime: 66 ms, faster than 41.36%
# Memory Usage: 43.4 MB, less than 87.87% 
*/