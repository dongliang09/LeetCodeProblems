/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {

    let horizontal = 0; vertical = 0

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'U') vertical += 1;
        else if (moves[i] === 'D') vertical -= 1;
        else if (moves[i] === 'L') horizontal -= 1;
        else if (moves[i] === 'R') horizontal += 1;
    }

    if (horizontal === 0 && vertical === 0) return true
    
    return false
    
};