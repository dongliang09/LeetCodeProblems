/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    
    // ================== idea ==============
    // matrix is mirrored over y=x diagonal, so we only need to check one side of the diagonal 
    
    // if two cities are connected, they will share the same x coordinates or y coordinates
    // each time we can check one row, any connection of 1 means they are connected to the city on that row
    // then check the column on that connection because any city on that column is also connected
    
    
    // ==================== global variables ================
    
    let visited = new Set()
    
    // ===============helper function =============
    
    function checkRow(row) {
        // return array with any connections we haven't seen and connection is 1 on that row
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
        // return array with any connections we haven't seen and connection is 1 on that column
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
        
        // if we haven't seen the index before, push to stack, then it will check row and colmn
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


/*
# Rank 162,972
# Date 6/5/2023
# Runtime: 78 ms, faster than 32.79%
# Memory Usage: 44.2 MB, less than 87.04% 

*/