/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const m = mat.length;
    const n = mat[0].length;
    var rowSum = 0;
    var rowTotal =[]; //index, value
    var sortedArray = []; //index
    var returnArray =[];
    
    //calculate sum of each row and store into array
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            rowSum = rowSum + mat[i][j]; 
        }
        rowTotal.push({"index": i, "value": rowSum});
        rowSum = 0;
    }
    
    
    rowTotal.sort((a, b) => a.value - b.value);
    rowTotal.forEach(element => {
        sortedArray.push(element.index);
    });
    
    returnArray = sortedArray.slice(0,k);
    
    return returnArray;
    
    
};