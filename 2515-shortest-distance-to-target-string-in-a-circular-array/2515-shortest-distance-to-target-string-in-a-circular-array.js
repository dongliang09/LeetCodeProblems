/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    
    let output = Infinity
    let distanceLeft = Infinity, distanceRight = Infinity

    // move to right
    for (let i = startIndex; i < words.length; i++) {
        if (words[i] === target) distanceRight = i - startIndex
        if (distanceRight < output) output = distanceRight
    }

    if (distanceRight === Infinity) {
        for (let i = 0; i < startIndex; i++) {
            if (words[i] === target) distanceRight = i + 1 + (words.length - startIndex - 1) 
            if (distanceRight < output) output = distanceRight
        }
    }

    // move to left
    for (let i = startIndex; i >= 0; i--) {
        if (words[i] === target) distanceLeft = startIndex - i
        if (distanceLeft < output) output = distanceLeft
    }

    if (distanceLeft === Infinity) {
        for (let i = words.length -1; i > startIndex; i--) {
            if (words[i] === target) distanceLeft = words.length -  i + startIndex
            if (distanceLeft < output) output = distanceLeft
        }
    }

    console.log(distanceLeft, distanceRight, output)
    if (output === Infinity) return -1

    return output
};