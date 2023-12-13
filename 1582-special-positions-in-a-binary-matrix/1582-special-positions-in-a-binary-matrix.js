/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    
    // let DoesRowHasOne = false;
    // let DoesColHasOne = false;
    // let rowHasOne = new Set();
    // let colHasOne = new Set();
    let output = 0;
    
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            let otherOne = 0;
            if (mat[i][j] === 1 ) {
                
                //check for row
                for (let k = 0; k < mat[0].length; k++) {
                    if (k !== j && mat[i][k] === 1) otherOne++;
                }
                //check for column
                for (let l = 0; l < mat.length; l++) {
                    if (l !== i && mat[l][j] === 1) otherOne++;
                }
                
                if (otherOne === 0) output++; 
            }
            
        }
    }
    
    return output
    
};