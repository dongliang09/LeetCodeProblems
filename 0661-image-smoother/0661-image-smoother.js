/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    
    let output = [];
    //===================== helper function =========
    function smoother(row, col) {
        let sum = 0;
        let countTile = 0;
        for (let i = row - 1; i < row + 2; i++) {
            for (let j = col - 1; j < col + 2; j++ ) {
                if (i >= 0 && i < img.length && j >= 0 && j < img[i].length) {
                    countTile++;
                    sum += img[i][j];
                }
            }
        }
        return Math.floor(sum/countTile)
    } 
    
    // ==================== main function ===========    
    for (let i = 0; i < img.length; i++) {
        
        let currArr = [];
        
        for (let j = 0; j < img[i].length; j++) {
            currArr.push(smoother(i, j))   
        }
        
        output.push(currArr);
    }
    
    return output
    
};