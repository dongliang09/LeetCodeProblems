/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if  (n < 1)  {
        return false
    } 
    else if (n < 2) {
        if ( n % 2 === 1) {
          return true
        } else {
          return false
        }
    }
    else {
        var halfNum = n / 2;
        return isPowerOfTwo(halfNum);
    }
    
    
    
};