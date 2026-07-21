/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {

    let output = []

    let arr = []
    let count

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            arr.push(grid[i][j])
        }
    }

    start = arr.length - k % arr.length
    arr = arr.slice(start).concat(arr.slice(0,start))

    for (let i = 0; i < arr.length; i+=0) {
        let row = []
        for (let j = 0; j < grid[0].length; j++) {
            row.push(arr[i])
            i++;
        }
        output.push(row)
    }

    return output
    
    
};