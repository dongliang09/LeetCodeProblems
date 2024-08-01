/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    
    let output = 0; 
    
    for (const detail of details) {
        let age = detail.slice(11,13)
        if (Number(age) > 60) output++
    }
    
    return output
};