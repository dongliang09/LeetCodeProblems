/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
    
    let dataObj = {} 
    let output = Infinity

    // store the curr index with the reverse number as property name
    // so that when we search the reverse, we know if current number has a reservse and know where they are
    // ex: 120 and 1200 both have reverse of 21
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        let reverse = parseInt(curr.toString().split("").reverse().join(""))
        if (dataObj[reverse] === undefined) dataObj[reverse] = [i]
        else dataObj[reverse].push(i)
    }

    for (let i = 0; i < nums.length; i++) {
        if (dataObj[nums[i]] !== undefined) {
            for (let j = 0; j < dataObj[nums[i]].length; j++) {
                let index = dataObj[nums[i]][j]
                let reverse = parseInt(index.toString().split("").reverse().join(""))
                if (index < i) {
                    let distance = i - index;
                    if (distance < output) output = distance
                    // only break when the reverse is not same as itself
                    if (index !== reverse) break 
                }
             
            }
        }
    }

    if (output === Infinity) return -1
    return output




    
};


/*
============= test cases ========
[1000, 100, 10, 1, 100, 10, 1]
I didn’t check the cases where reverse is itself
