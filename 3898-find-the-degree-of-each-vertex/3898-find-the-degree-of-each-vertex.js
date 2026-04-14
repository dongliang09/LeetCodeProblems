/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {

    let output = []

    // sum of each row is the degree
    for (let i = 0; i < matrix.length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j]
        }
        output.push(sum)
    }

    return output
    
};