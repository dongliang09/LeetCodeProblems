/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    
    
    //========== idea ================
    // split the string by space, iterate each element
    // check if it is number with Number(element)
    // if it is a number between 2 and 100, push into an array
    // if the array has more than one element, check if it is greater than the previous one
    // return false if it is not
    // at the end, if everything follows the rule, return true
    
    //=========== codes ==============
    let numArr = []
    let words = s. split(" ")
    
    for (let i =0; i < words.length;i++) {
        let curr = Number(words[i])
        if (2 <= curr && curr <=100) {
            numArr.push(curr)
            if (numArr.length !== 1) {
               if (numArr[numArr.length -1] <= numArr[numArr.length -2]) return false
            }
        }
    }
    
    return true
};

/*
Rank 156,066
Date: 06/14/2023
Runtime: 53 ms, faster than 83.47%
Memory Usage: 41.7 MB, less than 93.55%
*/