/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    
    // answer[0] is a list of all players that have not lost any matches.
    // answer[1] is a list of all players that have lost exactly one match.
    let answer = [[], []];
    
    let loseObj ={};
    
    // add key-value pair to obj
    // assign winner to 0 lose, 
    // assign loser to 1 lose for first appearance, then increment as it re-appear
    matches.forEach( match => {
        loseObj[match[0]] === undefined ? loseObj[match[0]] = 0 : loseObj[match[0]] = loseObj[match[0]];
        loseObj[match[1]] === undefined ? loseObj[match[1]] = 1 : loseObj[match[1]]++;
        //console.log(loseObj)
    })
    
    //convert into array
    let loseArr = Object.entries(loseObj);
    
    //store 0 lose and 1 lose into answer
    for (let i = 0; i < loseArr.length; i++) {
        if (loseArr[i][1] === 0) answer[0].push(loseArr[i][0]);
        if (loseArr[i][1] === 1) answer[1].push(loseArr[i][0]);
    }
    
    return answer
};

/*
Rank 281,009
Runtime: 581 ms, faster than 78.67%
Memory Usage: 93.4 MB, less than 82.87%
*/