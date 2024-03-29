/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
    // use a set to get non-duplicate, and only 1 and onward
    // convert into an sorted array, 
    // use binary search if index match the number
    
    // if only negative number, return 1 
    
    let nonDuplicate = new Set();
    let nonDuplicateArr = [];
    let isMissingFound = false;
    let currIndex = 0;
    let lowerBound = 0;
    let upperBound = nums.length; 
    
    // find all non-duplicate values
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) nonDuplicate.add(nums[i])
    }
    
    nonDuplicateArr = [...nonDuplicate].sort((a,b)=>a-b);
    upperBound = nonDuplicateArr.length;
    
    // edge cases: 
    // we have no positive,
    // or smallest number is already greater than 1, 
    // or we have no missing positive in between
    if (nonDuplicateArr.length === 0) return 1
    if (nonDuplicateArr[0] !== 1) return 1
    if (nonDuplicateArr.length === nonDuplicateArr[nonDuplicateArr.length - 1]) return nonDuplicateArr.length + 1;
    
    // take the midpoint, and set new lower bound or upper bound
    // if the nums equal to the index, search the right side, otherwise, search the left
    // set lower bound and upper bound
    while (!isMissingFound) {
        // console.log("every", lowerBound,upperBound,nonDuplicateArr.slice(lowerBound, upperBound+1));
        currIndex = lowerBound + Math.floor((upperBound - lowerBound) / 2);
        // console.log(currIndex)
        if (nonDuplicateArr[currIndex] === currIndex + 1) {
            lowerBound = currIndex;
        } else {
            upperBound = currIndex;
        }
        
        if (upperBound - lowerBound < 2) {
            isMissingFound = true;
            // console.log("lowerBound", lowerBound,upperBound,nonDuplicateArr.slice(lowerBound, upperBound+1));
            if (nonDuplicateArr[lowerBound] === lowerBound + 1) return nonDuplicateArr[lowerBound] + 1
            break;
        }
    }
    
    
    
};

/*
============== test case ==========
[1,2,3,4,5,6,7,8,9,20]

*/