/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    
    let temp = nums;
    let temp2 = []

    while (temp.length > 1) {
        for (let i = 0; i < temp.length - 1; i++) {
            temp2.push( (temp[i] + temp[i+1]) % 10 )
        }
        temp = temp2
        temp2 = []
    }

    return temp[0]

};

/**
Date: 9/30/2025
 */