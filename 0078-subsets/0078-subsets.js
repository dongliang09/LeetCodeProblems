/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
        
    function findSubsets(nums) {
        
        let array = []
        
        if (!set.has(nums.toString())) {
            set.add(nums.toString())
            array.push(nums)
        }
        
        for (let i = 0; i < nums.length; i++) {
            let currSubset = nums.slice(0,i).concat(nums.slice(i+1));
            // console.log(currSubset)
            let curr = findSubsets(currSubset)
            array = [...array].concat(curr)
        }
        
        return array
    }
    
    let set = new Set()
    set.add(nums.toString())
    
    let output = findSubsets(nums)
    output = [...output, nums]
    return output
    
};

/*
Date: 05/25/2025
Runtime: 2210 ms, faster than 5.78% 
Memory Usage: 56.8 MB, less than 5.17%
*/