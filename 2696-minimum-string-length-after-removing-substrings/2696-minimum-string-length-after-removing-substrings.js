/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    
    while(s.includes("AB") || s.includes("CD")) {
        
        let indexAB = s.indexOf("AB")        
        if (indexAB !== -1) {
            s = s.substring(0,indexAB) + s.substring(indexAB+2)
        }
        
        
        let indexCD = s.indexOf("CD")
        if (indexCD !== -1) {
            s = s.substring(0,indexCD) + s.substring(indexCD+2)
        }
    }
    
    return s.length
};