/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    
    let n = grid.length;
    let countPairs = 0;
    let columnArray = [];
    
    for (let i = 0; i < n; i++) {
        
        let column = [];
        
        for (let j = 0; j < n; j++) {
           column.push(grid[j][i]); 
        }
        
        columnArray.push(column);
    }
    
    //console.log(columnArray)
    
    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j < n; j++) {
            //console.log(grid[i].join(''), columnArray[j])
            if (grid[i].join(',') === columnArray[j].join(',')) {
                countPairs++;
            }
        }
    }
    return countPairs;
};


/*
===========test case=========
[[11,1],[1,11]]
*/