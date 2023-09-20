function sortSentence(s: string): string {

    let strArr = s.split(" ");
    
    strArr.sort((a,b)=>{
        return Number(a[a.length-1]) - Number(b[b.length-1])
    });
    
    for(let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].slice(0,-1);
    }
    
    return strArr.join(" ");
};