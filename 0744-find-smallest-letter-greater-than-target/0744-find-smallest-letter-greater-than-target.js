/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    
    if (letters[letters.length-1] < target) return letters[0]

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] > target) return letters[i]
    }

    return letters[0]
};