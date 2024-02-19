/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    
    let arr = new Array(s.length).fill(s[0]);
    
    for (let i = 0; i < indices.length; i++) {
        arr[indices[i]] = s[i]
    }
    
    return arr.join('')
    
};