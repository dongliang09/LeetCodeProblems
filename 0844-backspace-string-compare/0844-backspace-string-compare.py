class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        
        strS = []
        strT = []
        
        for char in s:
            if (char == '#'):
                if(len(strS) != 0):
                    strS.pop()
            else:
                strS.append(char)
                
        for char in t:
            if (char == '#'):
                if(len(strT) != 0):
                    strT.pop() 
            else:
                strT.append(char)
        
        # print(strS, strT)
        
        if (''.join(strS) == ''.join(strT)):
            return True
        else:
            return False
        
    # ===============================
    # Date: 07/11/2024
    # Runtime: 34 ms, faster than 68.25% 
    # Memory Usage: 16.5 MB, less than 23.20%
  
    # =========== first try ==========
    #         strS = []
    #         strT = []
    #         skipLtr = 0
    #         currIdx = len(s) - 1

    #         while (currIdx >= 0):
    #             if(skipLtr > 0):
    #                 if (s[currIdx] == "#"):
    #                     skipLtr = skipLtr + 1
    #                 else:
    #                     currIdx = currIdx - skipLtr + 1
    #                     skipLtr = 0
    #             else: 
    #                 if (s[currIdx] == "#"):
    #                     skipLtr = skipLtr + 1
    #                 else:
    #                     strS.append(s[currIdx])

    #             currIdx -= 1


    #         currIdx = len(t) - 1
    #         skipLtr = 0

    #         while (currIdx >= 0):
    #             if(skipLtr > 0):
    #                 if (t[currIdx] == "#"):
    #                     skipLtr = skipLtr + 1
    #                 else:
    #                     currIdx = currIdx - skipLtr + 1
    #                     skipLtr = 0
    #             else: 
    #                 if (t[currIdx] == "#"):
    #                     skipLtr = skipLtr + 1
    #                 else:
    #                     strT.append(t[currIdx])

    #             currIdx -= 1

    #         print(strS, strT)

    #         if (''.join(strS) == ''.join(strT)):
    #             return True
    #         else:
    #             return False

    # ============ test cases =============

    # "bxj##tw"
    # "bxo#j##tw"
        