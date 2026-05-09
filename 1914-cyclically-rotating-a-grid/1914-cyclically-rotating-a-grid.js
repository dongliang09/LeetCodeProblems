/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function(grid, k) {

    /**
    have an array to record the position of circle layer
    and another array to store the value of circle layer
    so that after the rotation, we can just plug in the position

    characterist of cirlce layer, nth layer is nth row/col from edge
     */

    let output = Array.from({ length: grid.length}, () => Array(grid[0].length).fill(0));
    let halfWidth = grid[0].length / 2, halfHeight = grid.length / 2
    let numLayer =  halfHeight > halfWidth ? halfWidth : halfHeight

    for (let i = 0 ; i < numLayer; i++) {
        let posArr = []
        let valArr =[]
        //top row, stop at the one column from the edge
        for (let j = 0 + i; j < grid[0].length - i - 1; j++) { 
            posArr.push([i,j]) //position
            valArr.push(grid[i][j])
        } 

        // right col
        for (let j = 0 + i; j < grid.length - 1 - i; j++) {
            let currCol = grid[0].length -1 -i;
            posArr.push([j,currCol]) //position
            valArr.push(grid[j][currCol])
        } 

        // bottom row
        for (let j = grid[0].length - 1 - i; j > 0 + i; j--) {
            let currRow = grid.length - 1 - i
            posArr.push([currRow, j]) //position
            valArr.push(grid[currRow][j])
        }

        // left column
        for (let j = grid.length - 1 - i; j > i; j--) {
            posArr.push([j, i]) //position
            valArr.push(grid[j][i])
        } 

        //rotation
        let numRotation = k % valArr.length
        let newValArr = valArr.slice(numRotation).concat(valArr.slice(0, numRotation))

        for (let j = 0; j < newValArr.length; j++) {
            let [x,y] = posArr[j]
            output[x][y] = newValArr[j]
        }
    }

    return output
};