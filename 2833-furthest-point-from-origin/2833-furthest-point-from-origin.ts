function furthestDistanceFromOrigin(moves: string): number {
    
    let leftCount = 0, rightCount = 0;
    let isLeftMore = true
    let newStr = ""
    let currentPosition = 0
    let furthest = 0
    
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "L") leftCount++
        else if (moves[i] === "R") rightCount++
    }
    
    if (rightCount > leftCount) isLeftMore = false;
    
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "_") {
            if (isLeftMore) newStr += "L"
            else newStr += "R"
        } else {
            newStr += moves[i]
        }
    }
    
    // console.log(newStr)
    
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === "L") {
            currentPosition -= 1
        } else {
            currentPosition += 1
        }
    }
    
    return Math.abs(currentPosition)

};