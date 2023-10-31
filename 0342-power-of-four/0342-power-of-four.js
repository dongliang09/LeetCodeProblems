/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (Math.log(n) / Math.log(4) % 1 === 0) {        
        return true
    } else {
        console.log(Math.log(n) / Math.log(4))
        return false
    }
    
    //some idea take square root % 2 to ensure is multiple of 4, but it could be 144 = 9 * 16
    /*if ( ((Math.sqrt(n) % 2 === 0) && (n > 0) && (n / 4 % 2 === 0)) || (n === 1) || (n === 4)) {
        return true
    } else {
        return false
    }
    /* with recursion
    if  (n < 1)  {
        return false
    } 
    else if (n < 4) {
        if ( n % 4 === 1) {
          return true
        } else {
          return false
        }
    }
    else {
        var FourNum = n / 4;
        return isPowerOfFour(FourNum);
    }
    */
    
};

// 4 16 36 144
/* test case
1
2
3
4
6
8
10
16
36
144
*/