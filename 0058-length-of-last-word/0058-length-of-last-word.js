/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    const newArray= s.split(' ');
    var arrayLength = newArray.length;
    //console.log(newArray);
    
    var i = arrayLength - 1;
    
    while (newArray[i] === '') {
        // console.log(i, newArray[i]);
        newArray.pop();
        i--;
    }
    
    //console.log("after loop",newArray);
    
    arrayLength = newArray.length;
    
    const secondArray = newArray[arrayLength - 1].split('');
    
    
    return secondArray.length
};