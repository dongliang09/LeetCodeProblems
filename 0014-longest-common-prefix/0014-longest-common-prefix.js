/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // if all have common prefix
    // assume every string starts has a common prefix, 
    // assume at least one letter in common, choose first stirng as example to compare with the rest
    // if no common prefix, return ""
    
    //check each element inside the array, if any has 0 length, return empty string
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length === 0) return ""
    }
    
    //edge case when there is only 1 string inside array
    if (strs.length === 1) return strs[0]
    
    // if there are more than 2 strings
    let comparePrefix = strs[0][0] // at least one letter used to compare, by default //flo
    let compareLen = comparePrefix.length //3
    let isPrefixMatch = true //false
    
    while(isPrefixMatch) {
        for (let i = 1; i < strs.length; i++) {
        
            let current = strs[i].substring(0, compareLen) //fli
            // console.log(comparePrefix, current)
            if (current !== comparePrefix) {
                isPrefixMatch = false;
                break;
            }
        }
        if (compareLen > strs[0].length) isPrefixMatch = false;
        if (isPrefixMatch) {
            compareLen++;
            comparePrefix = strs[0].substring(0, compareLen) 
        }
        
    }
    
    return comparePrefix.substring(0, compareLen - 1)
     
};
/*
==============test case===========
[""]
["abc",""]
["a"]
["flower","flower","flower","flower"]
*/