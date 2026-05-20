/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {

    /**
    using set might be faster to find common elments
    then find the size of intersection set
    */

    let setA = new Set()
    let setB = new Set()
    let output = []

    for (let i = 0; i < A.length; i++) {
        setA.add(A[i])
        setB.add(B[i])
        output.push(setA.intersection(setB).size)
    }
    
    return output
};