function findDuplicate(nums: number[]): number {
    
    let visited = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        if (visited.has(nums[i]))
            return nums[i];
        else 
            visited.add(nums[i]);
    }
    
};

/*
Date: 3/23/2024
Rank: 113,195
Runtime: 81 ms, faster than 64.47% 
Memory Usage: 72.4 MB, less than 23.76%
*/