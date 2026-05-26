/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    

    /**
        let's have 2 sets, one for uppercase, and one for lowercase
        but when we store the uppercase, we store as lowercase in this case
        then we find the common of both set, and that is our answer
     */
    let uppercase = new Set()
    let lowercase = new Set()
    let common
    let output = 0

    for (let i = 0; i < word.length; i++) {
        let curr = word[i]
        if (curr.toLowerCase() === curr) {
            lowercase.add(curr)
        } else {
            uppercase.add(curr.toLowerCase())
        }
    }

    common = lowercase.intersection(uppercase)
    
    return common.size

};