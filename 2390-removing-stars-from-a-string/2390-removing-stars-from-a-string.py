class Solution:
    def removeStars(self, s: str) -> str:
        
        strS = []
        
        for char in s:
            if (char == '*'):
                if(len(strS) != 0):
                    strS.pop()
            else:
                strS.append(char)
                
        return ''.join(strS)
    
    # Date: 07/11/20224
    # Rank: 110,619
    # Runtime: 141 ms, faster than 53.39% 
    # Memory Usage: 18.3 MB, less than 17.14% 