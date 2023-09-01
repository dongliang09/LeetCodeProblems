/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    
    let countArray = [];
    //console.log(n)
    
    for (var i = 0; i < n + 1; i++) {
        
        const stringBinary = i.toString(2);
        const stringLength = stringBinary.length;
        let count = 0;
        let stringArray = stringBinary.split('');


        //console.log(n, n.toString(2), stringLength,stringArray)

        for (var j = 0; j < stringLength; j++) {
            if (stringArray[j] === '1') {
                count++;
            }
        }

        countArray.push(count);
        //console.log(stringBinary, count, countArray)
    }
    
    return countArray;
    
};