/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let L = 0, R = 0, E = 0
    let distance

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'L') L++
        else if (moves[i] === 'R') R++
        else E++
    }

    distance = L - R

    if (distance < 0) return E-distance // add all the empty space to the left of distance
    else return distance + E // add all the empty space to the right

    
};