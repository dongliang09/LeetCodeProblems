/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    
    // matrix is mirrored over y=x diagonal, so we only need to check one side of the diagonal 
    
    // if two cities are connected, they will share the same x coordinates or y coordinates
    // each time we can check one row, any connection of 1 means they are connected to the city on that row
    // then check the column on that connection because any city on that column is also connected
    
    let visited = new Set()
    
    // ===============helper function =============
    
    function checkRow(row) {
        let rowConnections = []
        for (let j = row + 1; j < isConnected[0].length; j++) {
            if (isConnected[row][j] === 1 && !visited.has(j)) {
                rowConnections.push(j)
                visited.add(j)
            }    
        }
        return rowConnections
        
    }
    
    function checkColumn(col) {
        let colConnections = []
        for (let i = 0; i < col; i++) {
            if (isConnected[i][col] === 1 && !visited.has(i)) {
                colConnections.push(i)
                visited.add(i)
            }    
        }
        return colConnections
        
    }
    
    // ==============main function
    
    let output = 0
    
    for (let i = 0; i < isConnected.length; i++) {
        
        let stack = [] // stack is used for check if any column has new connection 
        
        if (!visited.has(i)) {
            visited.add(i)
            stack.push(i)
            output++
        }
        
        while (stack.length) {
            let current = stack.pop()
            
            let rowConnections = checkRow(current)
            let colConnections = checkColumn(current)
            
            stack.push(...rowConnections, ...colConnections)           
        }
        
    }
    
    return output
};