class Solution:
    def minOperations(self, logs: List[str]) -> int:
        output = 0
        for log in logs:
            if (log == "./"):
                output = output
            elif (log == '../'):
                if (output > 0): 
                    output = output - 1 
            else:
                output = output + 1
                
        return output
        