# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        # pre-order traversal -> DFS
            # process curr, traverse left, then traverse right
            # base case, when node is null
                # takes care of both leaves and nodes that are missing 1 child
        #reassign pointers
            # 0. make recursive call to find tail
            # 1. save right node temp = root.right 
            # 2. root.right = root.left 
            # 3. left's tail.right = temp
            # 4. cleanup: root.left = None 
            # 5. find the tail
                # if right_tail exists, it is right
                # elif left_tail exist, it is left
                # else curr node
            
        def _dfs(node):
            if not node:
                return None
            
            left_tail = _dfs(node.left)
            right_tail = _dfs(node.right)
            
            if node.left:
                temp = node.right
                node.right = node.left
                left_tail.right = temp
                node.left = None
            
            
            if right_tail:
                return right_tail
            elif left_tail:
                return left_tail
            else:
                return node
            
        _dfs(root)