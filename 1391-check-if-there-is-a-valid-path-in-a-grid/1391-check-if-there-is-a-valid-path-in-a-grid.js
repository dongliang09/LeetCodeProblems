/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {

    function getNeighbors(row, col, grid) {
        let neighbors = [];
        let height = grid.length, width = grid[0].length;
        let curr = grid[row][col]

        // Check top if curr has top connection
        if (row > 0 && (curr === 2 || curr === 5 || curr === 6) ) {
            let neighbor = grid[row-1][col]
            //only when neighbor has bottom connection
            if (neighbor === 2 || neighbor === 3 || neighbor === 4)
                neighbors.push([row - 1, col]);
        }

        // Check right if curr has right connection
        if (col < width - 1 && (curr === 1 || curr === 4 || curr === 6) ) {
            let neighbor = grid[row][col+1]
            //only when neighbor has left connection
            if (neighbor === 1 || neighbor === 3 || neighbor === 5)
                neighbors.push([row, col + 1]);
        }

        // Check bottom if curr has bottom connection
        if (row < height - 1 && (curr === 2 || curr === 3 || curr === 4) ) {
            let neighbor = grid[row+1][col]
            //only when neighbor has top connection
            if (neighbor === 2 || neighbor === 5 || neighbor === 6)
                neighbors.push([row + 1, col]);
        }

        // Check left if curr has left connection
        if (col > 0 && (curr === 1 || curr === 3 || curr === 5) ) {
            let neighbor = grid[row][col-1]
            //only when neighbor has right connection
            if (neighbor === 1 || neighbor === 4 || neighbor === 6)
                neighbors.push([row, col - 1]);
        }

        return neighbors;

    }

    let stack = [[0,0]]
    let visited = new Set()

    while (stack.length) {
        let [x,y] = stack.pop()
        console.log(x,y)

        if (x === grid.length - 1 && y === grid[0].length - 1)   return true

        let neighbors = getNeighbors(x, y, grid)

        neighbors.forEach((neighbor)=> {
            if (!visited.has(neighbor.toString())) {
                visited.add(neighbor.toString());
                stack.push(neighbor);
            }
        })

    }

    return false
    
};