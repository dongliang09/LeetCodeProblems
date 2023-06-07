/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    // consists only () [] {}
    // return boolean

    // ideal ( [ {} ] )
    // complicated   (((( ))))
    //   (( [  (()) ] ))

    // --------------------------idea 2
    // () => if it is closing of the same type, we can move on
    // ( [ => if next one is not closing partheneses  of same type, it must be a open parthenses
    // ( ] => false

    // if no open partheneses in array, and we have closing partheneses, return false

    // if we reach end of the loop, and we have a length for the open parthenese array, return false

    let openP= "([{";
    let openArr = []


    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        if (openP.includes(current)) {
            openArr.push(current)
        } else {
            if (openArr.length === 0) return false

            let lastOpen = openArr[openArr.length- 1];
            if (lastOpen === "(") {
                if (current !== ")") return false
            } else if (lastOpen === "[") {
                if (current !== "]") return false
            } else {
                if (current !== "}") return false
            }
            
            openArr.pop();
        }
    }

    if (openArr.length) return false
    return true

};



/**


Rank 206,588
Date: 05/10/2023
Runtime: 58 ms, faster than 82.12%
Memory Usage: 42.8 MB, less than 39.31%


    //------idea1------this only works if parentheses inside another
    // divide the string into 2,
    // example ([{    }])
    // first half   ( [ {
    // second half  } ] )
    // first parentheses in first half corresponds to  last parentheses in the second half
    // in other word, last parentheses in first half correspsonds to first parentheses in the second half

    // if they are the same type of parentheses, we continue to check the next one, 
    // until we reach the end of the first half or they don't match
    // if we reach the end, and they match, we will return true
    // if we found mismatch during the loop, we return false

    // let middle = Math.floor(s.length / 2);
    // let firstHalf = s.substring(0, middle)
    // let secondHalf = s.substring(middle);
    // console.log("first",firstHalf, "second", secondHalf)
 */