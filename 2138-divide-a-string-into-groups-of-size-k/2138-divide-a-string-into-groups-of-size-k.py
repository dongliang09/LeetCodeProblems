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