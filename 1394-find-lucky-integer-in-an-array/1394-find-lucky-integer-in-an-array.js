/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    
    // ================= idea =================
    // have an object to count the frequency of each element in the array
    // after counting, convert that into object entry, 
    // then we can compare the key and value
    // if they are the same, we can push into a new array for all the lucky number
    // sort the new array from biggest to smallest
    // return the first element if the length of array is greater than 1, else return -1
    
    // ================= codes =================
    let freqCount = {}

    for (let i =0; i<arr.length;i++) {
        let current = arr[i]
        if (freqCount[current]) freqCount[current]++
        else freqCount[current] = 1
    }
    
    let freqEntry = Object.entries(freqCount)
    let luckyArr =[]
    
     for (let i =0; i < freqEntry.length; i++) {
         if (freqEntry[i][0] === String(freqEntry[i][1])) 
             luckyArr.push(freqEntry[i][1])
    }
    
    luckyArr.sort((a,b)=>b-a)
    
    if (luckyArr.length === 0) return -1
    else return luckyArr[0]
    
};

/*
Rank 156,066
Date: 06/13/2023
Runtime: 99 ms
Memory Usage: 43.2 MB
*/