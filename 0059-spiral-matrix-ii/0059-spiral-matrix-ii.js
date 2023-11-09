/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {

    if (n === 1) return [[1]]

    let result = [];
    let direction = ["right", "down", "left","up"]
    let directionIndex = 0;
    let count = 1;
    let startX = 0;
    let startY = 0;
    let rightBound = n;
    let downBound = n;
    let leftBound = -1;
    let upBound = -1;

    // ------------helper function 
    function writeData() {
        if (directionIndex === 0) { //-----------right--change in Y
            bound = rightBound
            for (let i = startY; i < bound; i++) {
                result[startX][i] = count;
                count++               
            }
            startX = startX + 1
            startY = bound- 1;
            upBound++;
        } else if (directionIndex === 1) { //-----------down -- change in X
            bound = downBound
            for (let i = startX; i < bound; i++) {
                result[i][startY] = count;
                count++
            }
            startX = bound - 1
            startY = startY - 1;
            rightBound--;
        } else if (directionIndex === 2) { //----------left--change in Y
            bound = leftBound
            for (let i = startY; i > bound; i--) {
                result[startX][i] = count;
                count++
            }
            startX = startX - 1
            startY = bound + 1;
            downBound--;
        } else  { //-----------------------------------up -- change in X
            bound = upBound
            for (let i = startX; i > bound; i--) {
                result[i][startY] = count;
                count++
            }
            startX = bound + 1
            startY = startY + 1;
            leftBound++
        }
        directionIndex = (directionIndex + 1) % 4;
    }

    //--------------main function
    

    for (let i = 0; i < n; i++) {
        let zeroArr = new Array(n)
        zeroArr.fill(0)
        result.push(zeroArr)
    }

    for (let j = count; j <n*n; j++) {
        writeData()
    }

    return result
    

};



/**
Rank 206,588
Date: 05/10/2023
Runtime: 67 ms, faster than 17.66%
Memory Usage: 43.2 MB, less than 8.11%
 */