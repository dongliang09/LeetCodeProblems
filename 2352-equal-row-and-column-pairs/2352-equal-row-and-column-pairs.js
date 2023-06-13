/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    
    let n = grid.length;
    let countPairs = 0;
    let columnArray = [];
    
    // first store all column arrays
    for (let i = 0; i < n; i++) {
        
        let column = [];
        for (let j = 0; j < n; j++) {
           column.push(grid[j][i]); 
        }
        columnArray.push(column);
    }
    

    // compare the row array to each of column array    
    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j < n; j++) {
            if (grid[i].join(',') === columnArray[j].join(',')) {
                countPairs++;
            }
        }
    }
    return countPairs;
};


/*
# Rank 157,557
# Date 06/12/2023
# Runtime: 4716 ms, faster than 5.21%
# Memory Usage: 83.4 MB, less than 5.58%
===========test case=========
[[11,1],[1,11]]
*/