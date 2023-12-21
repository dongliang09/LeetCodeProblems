class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        # diagram
        # https://github.com/aymak91/ds-a_code_templates/blob/main/ds%26a_flowchart.png
        # backtrack template
        # https://github.com/aymak91/ds-a_code_templates/blob/main/python/14_backtracking.py
        # use backtracking -> because we are trying to find all of something
            # run all possibility until we either
                # a. find a valid solution
                # b. a solution is no longer possible for a ptah
            # recursive
            # steps
                # 1. modify state (place a queen) 
                # 2. try this path (recursive)
                # 3. backtrack (undo the modified state)
                
        # valid position
            # not in same row, 
            # not in same col,
            # not in positive diagnal
            # not in negative diagnal
        
        res = []
        board = [['.'] * n for _ in range(n)]
        #print(board)
        col = set()
        neg_diag = set() # r-c stays the same
        pos_diag = set() # r+c stays the same
        
        def _backtrack(r):
            if (r == n):
                # modify the answer
                copy = ["".join(row) for row in board]
                res.append(copy)
                return

            for c in range(n):
                if c not in col and r+c not in pos_diag and r-c not in neg_diag:
                    # modify state
                    board[r][c] = 'Q'
                    col.add(c)
                    neg_diag.add(r-c)
                    pos_diag.add(r+c)

                    # attempt path
                    _backtrack(r+1)

                    # undo modification
                    board[r][c] = '.'
                    col.discard(c) #if it doesn't exist, it won't error out
                    neg_diag.discard(r-c)
                    pos_diag.discard(r+c)

        #add to our res with backtracking
        _backtrack(0)
        
        return res