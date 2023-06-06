class Solution:
    def canMakeArithmeticProgression(self, arr: List[int]) -> bool:
        arr.sort()
        progress = arr[1] - arr[0]

        for i in range(2, len(arr)):
            if arr[i] - arr[i-1] != progress:
                return False
        
        return True

# Rank 195,534
# Date 5/18/2023
# Runtime: 61 ms, faster than 10.41%
# Memory Usage: 16.4 MB, less than 26.86%