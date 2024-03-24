function findDuplicate(nums: number[]): number {
    
    let visited = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        if (visited.has(nums[i]))
            return nums[i];
        else 
            visited.add(nums[i]);
    }
    
};