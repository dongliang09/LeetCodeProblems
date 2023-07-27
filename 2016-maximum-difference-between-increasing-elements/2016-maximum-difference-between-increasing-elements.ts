function maximumDifference(nums: number[]): number {
    
    let maxDiff = -1
    
    for (let i = 0; i < nums.length; i++) {
        
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] - nums[i] > maxDiff && nums[j] !== nums[i]) maxDiff = nums[j] - nums[i]
        }
    }

    return maxDiff
};

/*
# Rank 126,232
# Date 07/25/2023
# Runtime: 70 ms, faster than 35.00%
# Memory Usage: 44.2 MB, less than 40.00% 
*/