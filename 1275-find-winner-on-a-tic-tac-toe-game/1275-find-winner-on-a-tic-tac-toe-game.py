class Solution:
    def tictactoe(self, moves: List[List[int]]) -> str:
        
        board = []
        isPlayerOne = True

        # make a standard 9*9 board with all 0
        for i in range(3):
            board.append([0]*3)

        # fill in "X" and "O" into board
        # first player is 1, second player is 2
        for i in range(len(moves)):
            [x,y] = moves[i]
            if isPlayerOne:
                board[x][y] = 1
                isPlayerOne = False
            else:
                board[x][y] = 2
                isPlayerOne = True
        # print(board)
        
        #check who wins
        left2RightDiag = ""
        right2LeftDiag = ""
        cols= ["","",""]
        for i in range(3):
            #check rows
            if ("".join(str(num) for num in board[i]) == "111"):
                return "A"
            elif ("".join(str(num) for num in board[i]) == "222"):
                return "B"
            
            #check columns
            for j in range(3):
                cols[i] += str(board[j][i])
                if (cols[i] == "111"):
                    return "A"
                elif (cols[i] == "222"):
                    return "B"
        
            #check diagonals
            left2RightDiag += str(board[i][i])
            right2LeftDiag += str(board[i][2-i])
            if (left2RightDiag == "111" or right2LeftDiag == "111"):
                return "A"
            if (left2RightDiag == "222" or right2LeftDiag == "222"):
                return "B"
            # print (left2RightDiag, right2LeftDiag)

        if len(moves) == 9:  
            return "Draw"
        else:
            return "Pending"
        
# Rank 195,534
# Date 5/18/2023
# Runtime: 54 ms, faster than 13.47%
# Memory Usage: 16.4 MB, less than 15.70%