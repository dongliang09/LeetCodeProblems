/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    
    //==============helper function=========
    function CountPerimeter(row, col, grid) {
        // check neighbor to see how many to return
        // if we have 4 neighbors equals to 1, return 0
        // if we have 3 neighbors, return 1; 2 neighbors returns 2, 1 neighbors returns 3
        let neighborCount = 0;
        
        // check top
        if (row > 0 && grid[row - 1][col] === 1) neighborCount++;
        // check bottom
        if (row < grid.length - 1 && grid[row + 1][col] === 1) neighborCount++;
        // check left
        if (col > 0 && grid[row][col - 1] === 1) neighborCount++;
        // check right
        if (col < grid[0].length && grid[row][col + 1] === 1) neighborCount++;
        
        if (neighborCount === 4) return 0
        else if (neighborCount === 3) return 1
        else if (neighborCount === 2) return 2
        else if (neighborCount === 1) return 3
        else return 4
    }
    
    
    //=============main logic=============
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for ( let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                count += CountPerimeter(i,j,grid);
            }
        }
    }
    
    return count 
    
};

/*
Date: 4/17/2024
Rank: 109,020
Runtime: 145 ms, faster than 35.79% 
Memory Usage: 56.8 MB, less than 98.01%
============first try ============
    let count = 0;
    let rowCount = 0;
    let columnCount = 0;
    let tempCount = 0;
    
    for (let i  = 0; i < grid.length; i++) {
        
        //row Count
        for (let j  = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                count++;
                tempCount++;
            }
        }
        if (tempCount > 1) {
            rowCount += (tempCount - 1);
        }
        tempCount = 0;        
    }
    

    
    for (let i  = 0; i < grid.length; i++) {
        
        //column Count
        if( grid.length > 1) {
            for (let j  = 0; j < grid[0].length - 1; j++) {
                if ( (grid[j][i] === 1) && (grid[j+ 1][i] === 1) ) {
                    tempCount++;
                }
            }
            if (tempCount > 1) {
                columnCount += tempCount;
            }
            tempCount = 0;    
            }
            
    }
        
    //console.log(count,rowCount,columnCount)
    return (count*4-rowCount*2-columnCount*2)

*/