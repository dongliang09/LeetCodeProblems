/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    
    let scoreCopy = score.slice(0) // we used slice here because we want to make a shadow copy, not to change the original 
    let scoreCopySort = scoreCopy.sort((a,b)=>b-a)
    
    let output = []
    for (let i = 0; i < score.length; i++) {
        let currentScore = score[i]
        let placement = scoreCopySort.indexOf(currentScore)
        if (placement === 0) output.push("Gold Medal")
        else if (placement === 1) output.push("Silver Medal")
        else if (placement === 2) output.push("Bronze Medal")
        else output.push(String(placement + 1))
    }
    
    return output
};

/*
# Rank 179,825
# Date 5/21/2023
# Runtime: 118 ms, faster than 29.58% 
# Memory Usage: 45.6 MB, less than 34.16% 

*/