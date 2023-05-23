/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    // step 1, sort array
    // consecutive element: next element is +1 of current element
    
    // step 2, loop through the sorted array,
    // we can have a count variable
    
    // if next element is exactly 1 greater, then count + 1
    // else reset count varibale to 1
    
    // every time the count vairable reset or we reach the end of array,
    // we need to compare the count to a variable max
    
    let count = 1;
    let max = 0;
    nums.sort((a,b)=>a-b)
    
    if (nums.length === 0) return 0
    
    for (let i =0; i < nums.length - 1; i++) {
        let current = nums[i];

        if (nums[i + 1] === current + 1) {
            count++;
        } else if (nums[i + 1] > current + 1) {
            if (count > max) max = count
            count = 1;
        }
    }
    
    if (count > max) max = count
    
    return max
    
    
};
