class Solution:
    def capitalizeTitle(self, title: str) -> str:
        wordList = title.split(" ")
        output = ""
        for idx, word in enumerate(wordList):
            word = word.lower()
            if len(word) <= 2:
                output += word
            else: 
                word = word[0].upper() + word[1:]
                output += word
            if idx != len(wordList) - 1:
                output += " "
        return output
    
# Rank 195,534
# Date 5/18/2023
# Runtime: 51 ms, faster than 9.95%
# Memory Usage: 16.3 MB, less than 16.39%