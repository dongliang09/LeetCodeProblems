/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    
    let freq = {};
    let majority = [];
    
    nums.forEach(number => {
        freq[number] === undefined ? freq[number] = 1 : freq[number]++;
    })
    
    let entries = Object.entries(freq)
    
    for (let i = 0; i < entries.length; i++) {
        if (entries[i][1] > nums.length / 3) majority.push(Number(entries[i][0]));
    }
    
    return majority;
};


/*
Rank 277,854
Runtime: 75 ms, faster than 88.50%
Memory Usage: 42.7 MB, less than 97.08% 
*/