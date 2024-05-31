/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    nums.sort();
    
    let count = 1;
    let singleNumArray = [nums[0]];
    let prevSingleNum = nums[0];
    
    
    for (let i = 1; i < nums.length; i++) { 
        if (count === 0 && nums[i] !== nums[i -1]) {
            count++;
        } else if (count === 1 && nums[i] === nums[i -1]) {
            count++;
            // we could getting wrong single num, restore correct 
            singleNumArray.pop();
        }
        
        // in case we overwrite the single num by mistake 
        // example [1, 2, 2, 2] 
        if (count === 1 && nums[i] !== nums[i -1]) {
            prevSingleNum = singleNumArray[singleNumArray.length-1]
            singleNumArray.push(nums[i]);
        }
        
        //reset count when we count up to 3
        if (count === 2) {
            count = 0;
        }
        
        //console.log(singleNum)
        
    }
    
    return singleNumArray;
    
};

/*
rank 427,477
Runtime: 118 ms, faster than 37.31%
Memory Usage: 42.9 MB, less than 73.10% 
*/