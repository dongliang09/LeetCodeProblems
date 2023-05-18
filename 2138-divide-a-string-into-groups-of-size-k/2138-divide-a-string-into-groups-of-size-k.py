class Solution:
    def divideString(self, s: str, k: int, fill: str) -> List[str]:
        
        index = 0
        output = []
        
        while index < len(s):
            subString = ""
            
            if (index+k <= len(s)):
                subString += s[index:index+k]
            else:
                subString += s[index:]
                fillNTimes = index + k - len(s)
                for i in range(fillNTimes):
                    subString += fill
                    
            output.append(subString)    
            index += k
            
        return output
    
# Rank 195,534
# Date 5/18/2023
# Runtime: 58 ms, faster than 5.46% 
# Memory Usage: 16.3 MB, less than 25.73%