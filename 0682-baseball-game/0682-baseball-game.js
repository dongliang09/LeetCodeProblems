/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    
    let data = [];
    let output = 0;
    
    for (let i = 0; i < operations.length; i++) {
        let curr = operations[i];
        if (curr === '+') {
            data.push(data[data.length-1] + data[data.length-2])
        } else if (curr === 'D') {
            data.push(data[data.length-1] * 2)
        } else if (curr === 'C') {
            data.pop();
        } else {
            data.push(Number(curr))
        }
    }
    
    for (let i = 0; i < data.length; i++) {
        output += data[i]
    }
    
    return output
    
};