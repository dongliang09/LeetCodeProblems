/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {

    /*
    F(0) = 0 * arr0[0] + 1 * arr0[1] + ... + (n-1) * arr0[n-1]

    // we rotate the arry, but we use the same array with different index
    F(1) = 0 * arr0[n-1] + 1 * arr0[0] + 2 * arr0[1] + ... + (n-2) * arr0[n-2] 
    // put first term to the last
    F(1) = 1 * arr0[0] + 2 * arr0[1] + ... + (n-2) * arr0[n-2] + 0 * arr0[n-1]

    diff = F(1) - F(0) = (1-0) * arr0[0] + (2-1) * arr0[1] + ... + 
            (n-2 - [n-3]) * arr0[n-2] + (0-[n-1]) * arr0[n-1]
         = arr0[0] + arr0[1] + ... + arr0[n-2] - (n-1) * arr0[n-1]
         = arr0[0] + arr0[1] + ... + (- n*arr0[n-1]) + arr0[n-1]
         = arr0[0] + arr0[1] + ...  + arr0[n-1] - n*arr0[n-1]
         = sum - n*arr0[n-1]

    F(1) = F(0) + sum - n*arr0[n-1]

    From here, we get
    F(n) = F(n-1) + sum - n*arrk[n-1] 
    arrk[] is the shifted array from arr0 
    
    */


    let sum = 0, F= 0

    for (let i = 0; i < nums.length; i++) {
        F += i * nums[i]
        sum += nums[i]
    }

    let output = F
    let curr = 0

    for (let i = 0; i < nums.length; i++) {
        curr =  F + sum - (nums.length) * nums[nums.length - 1 - i]
        if (curr > output) output = curr
        // update
        F = curr 
    }



    return output
};

/**
=============== first try ================
    // problem: TLE
    let output;

    for (let i = 0; i < nums.length; i++) {
        let lastNum = []
        lastNum.push(nums.pop())
        nums = lastNum.concat(nums.slice(0,nums.length))
        let sum = 0
        for (let j = 1; j < nums.length; j++) {
            sum += j* nums[j]
        }
        if (sum > output || output === undefined) output = sum
    }

    return output
 */