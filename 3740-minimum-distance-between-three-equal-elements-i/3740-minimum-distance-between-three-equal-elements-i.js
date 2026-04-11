/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    if (nums.length < 3) return -1

    let indexObj = {}
    let output = Infinity;

    // get the index of same numbers in an object with each number as the property
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        if (indexObj[curr] === undefined) indexObj[curr] = new Array()
        indexObj[curr].push(i)
    } 

    // find min distance of each number
    let keys = Object.keys(indexObj)
    for (let i = 0; i < keys.length; i++) {
        let currNum = keys[i]
        let currArr = indexObj[currNum]
        if (currArr.length >= 3) {
            for (let i = 2; i < currArr.length; i++) {
                let distance = Math.abs(currArr[i] - currArr[i-1]) + Math.abs(currArr[i-1] - currArr[i-2]) + Math.abs(currArr[i] - currArr[i-2])
                if (distance < output) output = distance
            }
        }
    }

    if (output === Infinity) return -1
    return output
}; 