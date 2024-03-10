/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    
    if (nums.length === 1) return nums[0].sort((a,b)=>a-b);
    
    let commonSet = new Set()
    let set1 = new Set(nums[0])
    let set2 = new Set(nums[1])
    let intersection = new Set();

    for (const elem of set2) {
        if (set1.has(elem)) {
          intersection.add(elem); 
        }
    }
    commonSet = new Set([...intersection]);
    
    for ( let i = 2; i < nums.length; i++) {
        let currSet = new Set(nums[i])
        for (const elem of commonSet) {
            if (!(currSet.has(elem))) {
              commonSet.delete(elem); 
            }
        }
    }
    
    return [...commonSet].sort((a,b)=>a-b)
    
};