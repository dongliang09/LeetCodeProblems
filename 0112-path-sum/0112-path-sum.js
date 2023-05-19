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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    
    if (root === null) return false
    
    root.sum = root.val
    const stack = [root]
    
    while (stack.length) {
        let current = stack.pop()
        
        // check if it is leaf and if it matches the target
        if (current.left === null && current.right === null && current.sum === targetSum) {
            return true
        }
        
        //push children to stack
        if (current.left !== null) {
            current.left.sum = current.sum + current.left.val
            stack.push(current.left)
        }  
        
        if (current.right !== null) {
            current.right.sum = current.sum + current.right.val
            stack.push(current.right)
        }
    }
    
    return false
};