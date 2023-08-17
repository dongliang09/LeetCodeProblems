class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        
        num_set = set(nums)
        longest = 0
        
        
        for n in num_set:
            current_length = 1
            preceding_val = n - 1
            
            if preceding_val not in num_set:
                curr_val = n
                
                while curr_val+1 in num_set:
                    current_length += 1
                    curr_val += 1
                    
                longest = max(current_length, longest)
                
        return longest