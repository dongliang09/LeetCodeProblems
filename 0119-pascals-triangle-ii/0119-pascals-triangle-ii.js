/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    var triArray = [[1]];
    var tempArray = [];
    
    if (rowIndex + 1> 1) {
        
        for (var i = 1; i < rowIndex+ 1; i++) {
            
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
    
    
    
    return triArray[rowIndex];
    
};