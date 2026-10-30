/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {

    let output = []

    for (let i = 0; i < m; i++) {
        let row = ""
        for (let j = 0; j < n; j++) {
            if (i === m -1) row += '.'
            else {
                if (j === 0) row += '.'
                else row += '#'
            }
        }
        output.push(row)
    }
    
    return output
};