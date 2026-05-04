/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    const oddOrEven = n % 2;
    const centerPointI = Math.floor((n - 1) / 2) + 1;
    const centerPointJ = Math.floor(n / 2) ;
    let temp;
    //console.log(centerPointI, centerPointJ)
    for (let i = 0; i < centerPointI; i++) {
        // 7* 7, i = 1, j = 0 
        for (let j = 0; j < centerPointJ; j++) {
            //console.log(n, i, j, matrix[i][j],matrix[n - j - 1][i], matrix[n - i - 1][n - j -1], matrix[j][n - i - 1] )
            temp = matrix[i][j];
            matrix[i][j] = matrix[n - j - 1][i]; // 3rd Q to 4th Q  (1,0) <== (6,1)
            matrix[n - j - 1][i] = matrix[n - i - 1][ n - j - 1]; // 2rd to 3rd  (6,1) <==(5,6)
            matrix[n - i - 1][n - j -1] = matrix[j][n - i - 1]; // 1st to 2nd (5,6) <== (0,5)
            matrix[j][n - i - 1] = temp;//4th to 1st
        }
    }
};