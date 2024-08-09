/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    
    let output = []
    let total = rows * cols;
    let count = 0;
    let direction = 0
    
    // direction code:
    //    3                up
    //  2   0        left       right
    //    1                down
    
    let currX = rStart;
    let currY = cStart;
    let distance = 1;
    let isDistanceRepeated = false
    let currDist = 0
    
    // when the spiral circles, it follows a pattern, 
    // it starts like this: go right 1 spot, go down 1 spot, go left 2 spots, go up 2 spots,
    // then go right 3 spot, go down 3 spot, go left 4 spots, go up 4 spots
    // 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 ....and so on
    // so it repeats the distance twice, then add 1 to distance 
    
    
    
    while (count < total) {
        if ((0 <= currX && currX < rows) && (0 <= currY && currY < cols))  {
            output.push([currX, currY]);
            count++;
        }
        
        // console.log("dir",direction, "pos",currX, currY, "dis",distance, "curr",currDist, "T/F", isDistanceRepeated)
        
        if (direction === 0) {
            currY ++;
        } else if (direction === 1) {
            currX++;
        } else if (direction === 2) {
            currY--;
        } else {
            currX--;
        } 
        
        currDist++;
        
        if (currDist >= distance) {
            currDist = 0
            
            if ( isDistanceRepeated ) {
                distance++;
            }
            
            isDistanceRepeated = !isDistanceRepeated
            
            if (direction === 0) {
                direction = 1;
            } else if (direction === 1) {
                direction = 2
            } else if (direction === 2) {
                direction = 3
            } else {
                direction = 0
            } 
            
        }
        
        // console.log()
        
        
        
    }
    
    return output
    
    
    
    
    
};