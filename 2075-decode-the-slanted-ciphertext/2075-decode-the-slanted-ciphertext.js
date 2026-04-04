/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, rows) {
    if (rows === 1) return encodedText

    let originText = "";
    let currCol = 0;
    let columns = encodedText.length / rows;
    /*
        (1) number of empty space is the same as current row number, 
            ie, column starting index should be same as row index which  
        (2) we are starting with some index of each row, 
            this index only increment when we finsihed every row
        (3) when we finish the last column of last row, 
            ie, that mapping won't exist in originText, then we skip
        (4) remove empty space at the end of string
    */
    for (let col = 0; col <= columns; col++) {
        for (let row = 0; row < rows; row++) {
            let emptySpace = row
            let pos = currCol + row*columns + emptySpace
            let currChar = encodedText[pos]
            if (pos < encodedText.length) originText += currChar
        }
        currCol++;
    }  
    
    // remove extra empty space if any
    return originText.trimEnd();
    


};