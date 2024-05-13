/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    
    let output = [];
    
    for (let i = 0; i < grid.length - 2; i++) {
        output.push(new Array(grid[0].length - 2).fill(0));
    }
    
    for ( let i = 0; i < output.length; i++) {
        for ( let j = 0; j < output[i].length; j++) { 
            output[i][j] = Math.max(...grid[i].slice(j, j+3), ...grid[i+1].slice(j, j+3), ...grid[i+2].slice(j, j+3))
        }
    }
    
    return output
    
};