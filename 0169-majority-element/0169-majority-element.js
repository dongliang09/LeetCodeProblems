/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let freq = {};
    
    nums.forEach(number => {
        freq[number] === undefined ? freq[number] = 1 : freq[number]++;
    })
    
    let entries = Object.entries(freq)
    
    for (let i = 0; i < entries.length; i++) {
        if (entries[i][1] >= nums.length / 2) return Number(entries[i][0]);
    }
};


/*
Rank 277,854
Runtime: 71 ms, faster than 93.19% 
Memory Usage: 43.7 MB, less than 68.80%
*/