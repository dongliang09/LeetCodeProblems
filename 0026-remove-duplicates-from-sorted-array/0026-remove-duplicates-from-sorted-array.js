/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    // use a loop to check every element inside the num array
    // inside the loop, check current element with next element, 
    // if they are the same, remove the next element
    // until we check every element inside the array
    // at the end, return the length of num array
    
    let bound = nums.length        //3
    for (let i= 0; i < bound - 1; i++) { //0
        let current = nums[i]  //1
        let nextNum = nums[i + 1]  //2
        if (current === nextNum) {
            nums.splice(i+1, 1);  //[1,2]
            bound--;  ///2
            i--; //-1
        }
    }
    
    return nums.length

    
};

