function reverseOnlyLetters(s: string): string {

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