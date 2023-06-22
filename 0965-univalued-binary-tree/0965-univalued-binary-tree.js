/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    
    if (root === null) return true
    
    let unival = root.val
    let stack = [root]
    
    while (stack.length) {
        let current = stack.pop()
        
        if (current.val !== unival) return false
        
        if (current.left !== null) stack.push(current.left)
        if (current.right !== null) stack.push(current.right)
    }
    
    return true
    
};

/*
# Rank 142,221
# Date 06/22/2023
# Runtime: 66 ms, faster than 20.83%
# Memory Usage: 43.6 MB, less than 11.31%
*/