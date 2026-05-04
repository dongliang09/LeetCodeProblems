/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {

    // find all possible index of the starting letter from goal in the original string
    // then try until we find a match 

    // can also try more than one letter, worst case is one of them is head or tail

    let arr = []
    for (let i = 0; i <s.length; i++) {
        if (s[i] === goal[0]) arr.push(i)
    }

    for (let i = 0; i < arr.length; i++) {
        let front = s.slice(arr[i])
        let back = s.slice(0, arr[i])
        if (front+ back === goal) return true 
    }
    
    return false
};