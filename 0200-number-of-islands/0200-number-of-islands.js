/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let matrix = grid;
    let visited = new Set();
    let count = 0;
    //============helper function============
    function getNeighbors(row, col, matrix) {
        let neighbors = [];
        let height = matrix.length,
          width = matrix[0].length;

        // Check top
        if (row > 0 && matrix[row - 1][col] === "1") neighbors.push([row - 1, col]);
        // Check right
        if (col < width - 1 && matrix[row][col + 1] === "1") neighbors.push([row, col + 1]);
        // Check bottom
        if (row < height - 1 && matrix[row + 1][col] === "1") neighbors.push([row + 1, col]);
        // Check left
        if (col > 0 && matrix[row][col - 1] === "1") neighbors.push([row, col - 1]);

        // Return neighbors
        // console.log(neighbors)
        return neighbors;
    }
    
    function traverseIsland (row, col, matrix) {
        let queue = [[row,col]];
        visited.add([row,col].toString());

        while (queue.length) {
          let current = queue.shift();
          let neighbors = getNeighbors(current[0], current[1], matrix);
            // console.log(neighbors)
          neighbors.forEach(neighbor => {
            if (!visited.has(neighbor.toString())) {
              visited.add(neighbor.toString());
              queue.push(neighbor);
            }
          })
        }
      }
    
    //===============main logic=================

      // Iterate through all indices in matrix
      for ( let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++){
            // console.log(visited)
          if (matrix[i][j] === "1" && !visited.has([i,j].toString())) {
              count++;
              traverseIsland(i,j,matrix);
              

            }
          }
        }
        return count;
     
};

/*
Rank 252,132
Runtime: 188 ms, faster than 21.70% 
Memory Usage: 56.4 MB, less than 15.17%
===============================
class long practice problem
*/