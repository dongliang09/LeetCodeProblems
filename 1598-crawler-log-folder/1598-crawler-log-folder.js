/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    
    let output = 0
    
    for (let i = 0; i < logs.length; i++) {
        let curr = logs[i]
        if (curr === "./") {
            output = output
        } else if (curr === '../') {
            if(output > 0) output -= 1;
        } else {
            output++;
        }
    }
    
    return output
    
};