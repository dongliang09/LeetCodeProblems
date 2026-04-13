/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {

    let output = nums.length; 

    // we stop when we find the nearest target on both side
    // because that is min distance

    // check right side
    for (let i = start; i < nums.length; i++) {
        let curr = nums[i];
        if (curr === target) {
            let distance = Math.abs(i - start);
            if (distance < output) output = distance;
            break;
        }
    }

    // check left side
    for (let i = start; i >= 0; i--) {
        let curr = nums[i];
        if (curr === target) {
            let distance = Math.abs(i - start);
            if (distance < output) output = distance;
            break;
        }
    }

    return output
    
};