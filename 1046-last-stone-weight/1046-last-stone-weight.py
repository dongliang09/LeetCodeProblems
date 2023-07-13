class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        if len(stones) == 0:
             return 0
        
        while len(stones) > 1:
            stone1 = max(stones)
            stones.remove(stone1)
            stone2 = max(stones)
            stones.remove(stone2) 
            if stone1 - stone2 != 0:
                stones.append(abs(stone1-stone2))
        
        if len(stones) == 0:
            return 0
        else:
            return stones[0]

# Rank 218,387
# Runtime: 29 ms, faster than 85.80%
# Memory Usage: 13.8 MB, less than 50.59%