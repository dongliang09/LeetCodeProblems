function sortVowels(s: string): string {

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