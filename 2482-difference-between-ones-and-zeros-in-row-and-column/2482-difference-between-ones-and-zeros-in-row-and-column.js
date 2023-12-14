/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    
    let oneRow = [];
    let oneCol = [];
    let output = [];

    for (let i = 0; i < grid.length; i++) {
        let rowCount = 0;
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) rowCount++;
        }
        oneRow.push(rowCount);
    }
    
    for (let i = 0; i < grid[0].length; i++) {
        let colCount = 0;
        for (let j = 0; j < grid.length; j++) {
            if (grid[j][i] === 1) colCount++;
        }
        oneCol.push(colCount);
    }
    
    // console.log(oneRow, oneCol)
    for(let i = 0; i < grid.length; i++) {
        let diffArr = [];
        for (let j = 0; j < grid[i].length; j++) {
            let diff = oneRow[i] - (grid[i].length - oneRow[i]) + oneCol[j] - (grid.length - oneCol[j])
            diffArr.push(diff)
        }
        output.push(diffArr)
    }
    
    return output
};