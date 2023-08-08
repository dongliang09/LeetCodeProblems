function reverseOnlyLetters(s: string): string {
    
    
    // =============== idea ==================
    // we can have an array to store letters and an array to store the indexes of non-letter characters
    // and we need to have pointers for each array
    // after we have all the letters, we can reverse the array
    // 
    // Have a for-loop to increment the count 
    // if loop count is the same as any number in the non-letter array, that means we hits a non-letter character
    // we can access that with s[non-letter-array[pointer]], then increment the pointer
    // 
    // do the same thing simliar to letters
    // =============== code ==================

    let alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let letters : string[] = []
    let nonLetterIndex : number[] = []
    let nonLetterArrPointer = 0
    let lettersArrPointer = 0
    let output = ""
    
    for (let i = 0; i < s.length; i++) {
        if (!alphabets.includes(s[i])) {
            nonLetterIndex.push(i)
        } else {
            letters.push(s[i])
        }
    }
    
    letters.reverse()
    
    for(let i = 0; i < s.length; i++) {
        if (i === nonLetterIndex[nonLetterArrPointer]) {
            output += s[nonLetterIndex[nonLetterArrPointer]]
            nonLetterArrPointer++
        } else {
            output += letters[lettersArrPointer]
            lettersArrPointer++
        }
    }
    
        return output
    
};

/*

# Rank 122,268
# Date 08/08/2023
# Runtime: 59 ms, faster than 68.42%
# Memory Usage: 43.7 MB, less than 81.58%

*/