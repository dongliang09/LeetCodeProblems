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