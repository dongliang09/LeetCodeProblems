/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    
    let mismatchArray = [];
    let noMismatchArray = [];
    let mismatchPart = [];
    
    //nums.sort((a,b) => a - b);
    
    nums.sort();
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            mismatchArray.push(nums[i])
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        noMismatchArray.push(i+1);
    }
    
    
    
    console.log(noMismatchArray)
    mismatchPart = noMismatchArray.filter(x => !nums.includes(x))
    
    mismatchArray.push(mismatchPart)
    
    return mismatchArray;
};


// rank 443,692
// Runtime: 1176 ms, faster than 8.85%
// Memory Usage: 49.6 MB, less than 21.29% 

/*
test case 
[2,2]
[3,2,3,4,6,5]
*/



/*

for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] && nums[i] === (i + 1)) {
            mismatchArray.push(nums[i], nums[i] - 1)
        } else if (nums[i] === nums[i - 1] && nums[i] === i) {
            mismatchArray.push(nums[i], nums[i] + 1)
        }
    }


*/