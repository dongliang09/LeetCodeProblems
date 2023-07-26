function splitWordsBySeparator(words: string[], separator: string): string[] {

    let output:string[] = [];
    
    for (let i = 0; i < words.length; i++) {
        let allWord:string[] = words[i].split(separator)

        allWord.forEach(element=> {
            if (element !== "") {
                output.push(element)
            }
        })
            
    }
    
    return output
};