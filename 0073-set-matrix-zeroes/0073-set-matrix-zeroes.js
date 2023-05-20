/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
    let row = new Set()
    let col = new Set()
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                row.add(i);
                col.add(j);
            }
        }
    }
    
    let rowArr = [...row]
    let colArr = [...col]
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (rowArr.includes(i) || colArr.includes(j)) {
                matrix[i][j] = 0
            }
        }
    }
    
    
};

/*
# Rank 195,534
# Date 5/19/2023
# Runtime: 85 ms, faster than 40.69%
# Memory Usage: 5.2 MB, less than 40.12%
*/
