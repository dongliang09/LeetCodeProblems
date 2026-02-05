/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    
    if (nums.length === 1) return nums

    let result = nums.slice();

    for (let i = 0; i < nums.length; i++) {
        let step = nums[i] 
        let landingIdx;

        if (nums[i] > 0) {
            landingIdx = (i + step) % nums.length;
            result[i] = nums[landingIdx]
        } else if (nums[i] < 0) {
            if (i + step >= 0) landingIdx = i + step;
            else {
                landingIdx = (i + step) % nums.length
                while (landingIdx < 0) landingIdx += nums.length
            }
            result[i] = nums[landingIdx]
        } else {
            result[i] = nums[i]
        }
    }

    return result
};

/**
================= failed cases ========
[-10]
[-10,-10]
 */