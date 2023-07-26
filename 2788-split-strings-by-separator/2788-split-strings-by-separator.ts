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

/*

# Rank 126,232
# Date 07/25/2023
# Runtime: 102 ms, faster than 52.78%
# Memory Usage: 49 MB, less than 97.22%
*/