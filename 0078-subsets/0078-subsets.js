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