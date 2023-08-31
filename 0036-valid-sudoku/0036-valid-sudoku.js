/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    //=============problem requirement===========
    //each row no duplicate
    //each column no duplicate
    //each 3x 3 square no repeat
    //============plan========================
    // we can pass num in row as array, num in column as array, num in 3x3 square as array
    //ignore "." / empty space
    // pass in array into helper function to check if there is duplicate
    
    
    // ==============helper function============
    
    function checkArray (array) {
        
        let count = {}
        let duplicate = true;
        
        array.forEach(ele => {
            count[ele] ? duplicate = false : count[ele] = 1;
        })
        
        return duplicate
    }
    
    
    //=======================main logic===================
    
    let startingPoint = [[0,0], [0,3], [0,6],
                         [3,0], [3,3], [3,6],
                         [6,0], [6,3], [6,6]];
    //check row
    for ( let i = 0; i < board.length; i++) {
        let tempArr = [];
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== ".") tempArr.push(board[i][j])
        }
        //console.log("row", checkArray(tempArr))
        if(!checkArray(tempArr)) return false
    }
    
    //check column
    for ( let i = 0; i < 9; i++) {
        let tempArr = [];
        for (let j = 0; j < 9; j++) {
            if (board[j][i] !== ".") tempArr.push(board[j][i])
        }
        //console.log("col", checkArray(tempArr))
        if(!checkArray(tempArr)) return false
    }
    
    //check 3x3
    for (let k = 0; k < startingPoint.length; k++) {
        let startX = startingPoint[k][0];
        let startY = startingPoint[k][1];
        let tempArr = [];
        
        for ( let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[startX + i][startY + j] !== ".") tempArr.push(board[startX + i][startY + j])
            }
        }
        //console.log("3x3", checkArray(tempArr))
        if(!checkArray(tempArr)) return false
    }
    
    return true
    
};


/*
Rank 310,113
Runtime: 93 ms, faster than 84.97%
Memory Usage: 46.7 MB, less than 33.03%
=============old code=======
    function checkArray (array) {
        
        let count = {}
        
        array.forEach(ele => {
            count[ele] ? count[ele]++ : count[ele] = 1;
        })
        
        let values = Object.values(count);
        
        //console.log(values)
        for (let i = 0; i < values.length; i++) {
            if (values[i] > 1) return false   
        }
        return true
    }
    
    //console.log(checkArray([1,2,3,4,5,6,6,6,7,8,9,0]))

*/