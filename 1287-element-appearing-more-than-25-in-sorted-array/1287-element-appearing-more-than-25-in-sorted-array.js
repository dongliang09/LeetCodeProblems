/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    
    let countObj = {}
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in countObj) {
            countObj[arr[i]]++;
        } else {
            countObj[arr[i]] = 1;
        }
    }
    
    let countEntry = Object.entries(countObj);

    for (let i = 0; i < countEntry.length; i++) {
        if (countEntry[i][1] > arr.length / 4) return countEntry[i][0];
    }
    
    //by default return something
    return arr[0]  
};

/*
Rank 127,506
Runtime: 64 ms, faster than 41.98%
Memory Usage: 44.7 MB, less than 39.57%
*/