function finalString(s: string): string {

    let output : string = ""
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'i') {
            output = output.split("").reverse().join("")
        } else {
            output += s[i]
        }
    }
    
    return output
};