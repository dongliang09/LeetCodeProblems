/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    
    const wordsArray = s.split('');
    const sLength =  wordsArray.length;
    
    var tempArray = [];
    var tempString = '';
    var finalString = '';
    
    for (var i = 0; i < sLength; i++) {
        tempArray.push(wordsArray[i]);
        
        
        // k > length -> reverse all 
        
        // reverse letters when (i + 1) / 3 === 1 ,ie, end of k range 
        // or i % 6 < 3 and i = length 
        
        // between k and 2k range
        // could be hitting end of string when we are in range
        
        if ( ((i === sLength - 1)&&(k > sLength))   ||  ((i === sLength - 1)&&(i % (2*k) < k))   || ((i + 1) / k % 2=== 1) ) {
            tempArray.reverse();
            tempString = tempArray.join('');
            finalString = finalString + tempString;
            tempString = '';
            tempArray = [];
        } else if ( ((i === sLength - 1)&&(i % (2*k) > (k-1)))  || ((i + 1) / k % 2 === 0) ) {
            tempString = tempArray.join('');
            finalString = finalString + tempString;
            tempString = '';
            tempArray = [];
        }
        
        
    }
    
    
    
    return finalString
};