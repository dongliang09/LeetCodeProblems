/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {

  let lucky = [];
    
    //============== helper functions=============
  let isColMax = function (row, column) {
    let max = matrix[row][column];

    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][column] > max) {
        return false;
      }
    }
    return true;
  };

  let isRowMin = function (row, column) {
    let min = matrix[row][column];

    for (let i = 0; i < matrix[row].length; i++) {
      if (matrix[row][i] < min) {
        return false;
      }
    }
    return true;
  };  

    //=============main function=============
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (isColMax(i, j) && isRowMin(i, j)) lucky.push(matrix[i][j]);
    }
  }

  

  return lucky;
    
};
/*
Rank 359,534
Runtime: 100 ms, faster than 69.23%
Memory Usage: 44.4 MB, less than 80.77% 
*/
