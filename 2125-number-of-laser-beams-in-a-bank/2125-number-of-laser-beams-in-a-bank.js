/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    
    let output = 0;
    let allZero = "0".repeat(bank[0].length);
    
    for (let i = 0 ; i < bank.length; i++) {
        if (bank[i] === allZero) {
            bank.splice(i, 1);
            i--;
        }
        
    }    
    
    for (let i = 0 ; i < bank.length - 1; i++) {
        let currRow = 0;
        let nextRow = 0;
        
        //check how many 1's in current row
        for(let j= 0; j < bank[i].length; j++) {
            if (bank[i][j] === "1") currRow++;
        }
        
        //check how many 1's in next row
        for(let j= 0; j < bank[i+1].length; j++) {
            if (bank[i+1][j] === "1") nextRow++;
        }
        
        //subtotal is current row * next row
        output += (currRow * nextRow)
        
        
    }
    
    return output;
    
};