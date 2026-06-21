/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {

    let altitude = []
    let currHeight = 0
    let output = 0

    for (let i = 0; i < gain.length; i++) {
        currHeight += gain[i]
        altitude.push(currHeight)
    }

    for (let i = 0; i < altitude.length; i++) {
        let curr = altitude[i]
        if (curr > output) output = curr
    }

    return output
    
};