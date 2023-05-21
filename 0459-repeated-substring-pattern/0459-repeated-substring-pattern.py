class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        
        if len(s) == 1:
            return False
        
        halfLength = (len(s) + 1) // 2 if len(s) % 2 == 1 else len(s) // 2 
        for i in range(1, halfLength + 1):
            if (len(s) % i == 0):
                subS = s[0:i]
                newS = ""
                for j in range(len(s) // i):
                    newS += subS
                    if newS == s:
                        return True
        return False