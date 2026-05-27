/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {

    /**
        create an object to store the last index of lowercase, and only the 1st uppercase
        then compare the index of lowercase and uppercase
        increment if lowercase index is smaller than uppercase index
     */
    
    let output = 0
    let indexObj = {}
    let lowercase = new Set()

    for (let i = 0; i < word.length; i++) {
        let curr = word[i]
        if (curr.toLowerCase() === curr) {
            indexObj[curr] = i
            lowercase.add(curr)
        } else {
            if (indexObj[curr] === undefined) indexObj[curr] = i
        }
    }

    let lowerCaseArr = [...lowercase]

    for (let i = 0; i < lowerCaseArr.length; i++) {
        let curr = lowerCaseArr[i]
        let uppercase = curr.toUpperCase()
        if (indexObj[curr] < indexObj[uppercase]) output++
    }

    return output

};