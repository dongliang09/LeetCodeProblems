/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    // conver the number to string, reverse the string, convert back to number
    // find the distance
    return Math.abs(parseInt(n.toString().split("").reverse().join("")) - n)
    
};