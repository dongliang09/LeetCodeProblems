class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        
        isDecreasing = True if nums[0] > nums[len(nums) - 1] else False
        if isDecreasing:
            for idx,num in enumerate(nums[0:len(nums)-1]):
                if nums[idx] < nums[idx+1]: 
                    return False
        else:
            for idx,num in enumerate(nums[0:len(nums)-1]):
                if nums[idx] > nums[idx+1]: 
                    return False
        return True
    
# Rank 195,534
# Date 5/18/2023
# Runtime: 949 ms, faster than 84.26%
# Memory Usage: 30.6 MB, less than 28.55%