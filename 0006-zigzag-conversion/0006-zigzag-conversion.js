/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    let direction = 0; // 0 for down, 1 for up
    let rowCount = 0; 
    let StrArray = [];
    let finalStr = '';
    let tempStr= '';
    
    //make different rows
    for (let i = 0; i < numRows; i++) {
        StrArray.push([]);
    }
    
    //store input string into array's different rows
    for (let i = 0; i < s.length; i++) {
        
        StrArray[rowCount].push(s[i]);
        //change direction if it hits top row or bottom row
        if (rowCount === (numRows - 1)) {
            direction = 1;
        } else if (rowCount === 0) {
            direction = 0;
        }
        
        
        if (numRows !== 1 && direction === 0) {
            rowCount++;
        } else if (numRows !== 1 && direction === 1){
            rowCount--;
        }
    }
    
    //reading the array and form the new string
    
    for (let i = 0; i < numRows; i++) {
        tempStr = StrArray[i].join('');
        finalStr += tempStr;
    }
    
    return finalStr;
};



/*

rank 415,139
Runtime: 90 ms, faster than 93.60%
Memory Usage: 48.4 MB, less than 43.74% 

test case
"AB"
1
"PAYPALISHIRING"
3
"PAYPALISHIRING"
4
"A"
1
*/