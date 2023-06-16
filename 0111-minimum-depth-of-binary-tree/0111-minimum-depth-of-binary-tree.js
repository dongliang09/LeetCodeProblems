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
 * @return {number}
 */
var minDepth = function(root) {
    
    let output = Infinity
    
    if (root === null) return 0
    
    root.level = 1
    let stack = [root]
    
    while (stack.length) {
        let current = stack.pop()
        
        // check if it is leaf and level less than minimum depth
        if (current.left === null && current.right === null) {
            if (current.level < output) output = current.level
        }
        
        // push to stack
        if (current.left !== null) {
            current.left.level = current.level + 1
            stack.push(current.left)
        }
        if (current.right !== null) {
            current.right.level = current.level + 1
            stack.push(current.right)
        }
        
    }
    
    return output
};

/*
Rank: 150,923
Date: 06/16/2023
Runtime: 232 ms, faster than 43.75%  
Memory Usage: 107.7 MB, less than 5.27%

*/