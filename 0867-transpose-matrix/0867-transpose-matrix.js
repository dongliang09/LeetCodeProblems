/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    
    let newArr = [];
    
    for (let i = 0 ; i < matrix[0].length; i++) {
        newArr[i] = new Array(matrix.length).fill(0);
    }
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            newArr[j][i] = matrix[i][j];
        }
    }
    
    return newArr
    
};


/*
Rank 127,888
Runtime: 64 ms, faster than 41.98%
Memory Usage: 44.7 MB, less than 39.57%
*/