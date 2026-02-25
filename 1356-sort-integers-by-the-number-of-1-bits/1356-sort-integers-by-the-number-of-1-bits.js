/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {

    let sortArr = [[],[],[],[],[],[],[],[],[],[],[],[],[],[]]; // 10^4 has max 14 bits
    let output = []

    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i].toString(2);
        let count = 0;
        for (let j = 0; j < curr.length; j++) {
            if (curr[j] === '1') count++
        }
        sortArr[count].push(arr[i])
    }
    
    for (let i = 0; i < sortArr.length; i++) {
        sortArr[i].sort((a,b)=>a-b)
        output = [...output, ...sortArr[i]]
    }

    return output
};