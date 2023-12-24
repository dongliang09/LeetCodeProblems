/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    
    // ================ idea 2 ==============
    // make two alternating string with 0 and 1, one starts with 0, and another starts with 1
    // compare the the s, see which one has lower number of opeartions
    
    let str0 = "0";
    let str1 = "1";
    let diff0 = 0;
    let diff1 = 0;
    
    //construct a string of same length with original
    for (let i = 1; i < s.length; i++) {
        if (str0[i-1] === "0") str0 += "1"
        else str0 += "0"
        
        if (str1[i-1] === "0") str1 += "1"
        else str1 += "0"
    }
    
    // check the diff of string with original
    for (let i = 0; i < s.length; i++) {
        if (str0[i] != s[i]) diff0++;
        if (str1[i] != s[i]) diff1++;
    }
    
    return diff0 > diff1 ? diff1 : diff0;
    

};
 

/*
test case 
"110010"
"1111"
"0010"
"0100"

============= first try ==============
    let count = 0;
    let tempCount = 1;
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i-1]) {
            
            if(tempCount === 1) {
                count++;
                tempCount = 0;
            }
            tempCount++;
        }
    }
    
    return count
*/