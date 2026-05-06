/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {

    /**
        anything on the left of obstacle will fall on it, 
        i.e., find the number of stones between each obstacles in one row

        when we detects an obstacle, or we hit the end of the row, 
        get the count of stone and empty to fill on the top of obstacle in new array

        do the same for each row in old array

        when the cell arr[i][j] rotate, the new position would be arr[j][boxGrid.length - 1 - i]
     */

    let arr = Array.from({ length: boxGrid[0].length }, () => Array(boxGrid.length).fill("."));

    for(let i = 0; i < boxGrid.length; i++) {
        let stoneCount = 0;
        for (let j = 0; j < boxGrid[0].length; j++) {
            let curr = boxGrid[i][j]

            if (curr === '#') stoneCount++
            else if (curr === '*'){
                arr[j][boxGrid.length - i - 1] = '*'

                // fill the stone
                for (let k = 0; k < stoneCount; k++) {
                    arr[j - k - 1][boxGrid.length - 1 - i] = "#"
                }
                stoneCount = 0;
            } 
            if (j === boxGrid[0].length - 1){
                // fill the stone
                for (let k = 0; k < stoneCount; k++) {
                    arr[j - k][boxGrid.length - 1 - i] = "#"
                }
                stoneCount = 0;
            } 


        }
    }
    return arr
    
};