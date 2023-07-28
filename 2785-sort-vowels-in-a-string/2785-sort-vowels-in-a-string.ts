function sortVowels(s: string): string {
    
    // ========== idea ==============
    // loop throught the input string, if it is a vowel, store the vowel and index
    // sort the vowel array
    
    // recompose a new string, start at index 0, counting up 
    // if the index is in index-array, take the element from vowel array, 
    // then increase the index, 
    // keep doing so until we have the same length as input string
    
    // ========== code ==============

    const indexes : number[] = [];
    const vowelArr : string[] = [];
    
    const lowerVowel = 'aeiou';
    const upperVowel = 'AEIOU';
    
    let output = ""
    
    for (let i = 0; i < s.length; i++) {
        if (lowerVowel.includes(s[i]) || upperVowel.includes(s[i])) {
            indexes.push(i)
            vowelArr.push(s[i])
        }
    }
    
    vowelArr.sort()
    
    if (vowelArr.length === 0) return s
    
    let vowelArrIdx = 0
    
    for (let i = 0; i < s.length; i++) {
        if (i !== indexes[vowelArrIdx]) {
            output += s[i]
        } else {
            output += vowelArr[vowelArrIdx]
            vowelArrIdx++
        }
    }
    
    return output
};

/*
# Rank 124,273
# Date 07/28/2023
# Runtime: 174 ms, faster than 100.00%
# Memory Usage: 66.4 MB, less than 33.33% 
*/