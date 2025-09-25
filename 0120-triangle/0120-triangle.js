/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {

    // start from the bottom second row, moving up the triangle
    // take the minimum value of the next row's two choices
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            let curr = triangle[i][j]
            triangle[i][j] = Math.min(triangle[i + 1][j] + curr, triangle[i + 1][j + 1] + curr)
        }
    }

    return triangle[0][0]


};

/**
Date: 9/25/2025

===================first try =================
// fail on testcase where we have big triangle
// because the stack loop is taking a long time 

    let minSum = Infinity;
    let stack =[{row:0, index: 0, sum: triangle[0][0]}]

    while (stack.length) {
        let curr = stack.pop();
        
        // console.log(curr, minSum)
        //check sum if it reaches the last row
        if (curr.row >= triangle.length - 1) {
            if (curr.sum < minSum) minSum = curr.sum
        } 
        
        // add each index of next row into stack
        if (curr.row + 1 < triangle.length) {
            if ( curr.index < triangle[curr.row+ 1].length) {
                stack.push({
                    row: curr.row + 1, 
                    index: curr.index,
                    sum: curr.sum + triangle[curr.row + 1][curr.index]}
                )
            }
            if ( curr.index + 1 < triangle[curr.row+ 1].length) {
                stack.push({
                    row: curr.row + 1, 
                    index: curr.index + 1,
                    sum: curr.sum + triangle[curr.row + 1][curr.index + 1]}
                )
            }
            
        }

    }
    
    return minSum
 */