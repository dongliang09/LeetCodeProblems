/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    var triArray = [[1]];
    var tempArray = [];
    
    if (numRows > 1) {
        
        for (var i = 1; i < numRows; i++) {
            
            tempArray.push(1);
            
            if (i >= 2) {
                for (var j = 1; j < i; j++) {
                    var temp = 0;
                    temp = triArray[i - 1][j - 1] + triArray[i - 1][j];
                    tempArray.push(temp);
                }
            }
            
            
            tempArray.push(1);
            
            triArray.push(tempArray);
            tempArray = [];
        }
    
    }
    
    
    
    return triArray;
};