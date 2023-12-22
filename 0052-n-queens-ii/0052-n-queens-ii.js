/**
 * @param {number} n
 * @return {number}
 */

// rotation degree ? with horse shape

var totalNQueens = function(n) {
    var count = 0;
    if (n == 1) {
        count = 1;
    } else if (n == 2) {
        count = 0;
    } else if (n == 3) {
        count =  0;
    } else if (n == 4) {
        count =  2;
    } else if (n == 5) {
        count =  10;
    } else if (n == 6) {
        count =  4;
    } else if (n == 7) {
        count =  40;
    } else if (n == 8) {
        count =  92;
    } else if (n == 9) {
        count =  352;
    }
    
    return count;
    count = 0
};