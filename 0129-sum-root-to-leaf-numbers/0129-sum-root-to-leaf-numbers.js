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
var sumNumbers = function(root) {
    
    root.number = String(root.val)
    
    let sum = 0
    
    let stack = [root]
    
    while (stack.length) {
        let current = stack.pop()
        
        //check if it is leaf node
        if (current.left === null && current.right === null) {
            sum += Number(current.number)
        }
        
        //push to stack
        if (current.left !== null) {
            current.left.number = current.number + String(current.left.val)
            stack.push(current.left)
        }
        if (current.right !== null) {
            current.right.number = current.number + String(current.right.val)
            stack.push(current.right)
        }
    }
    
    
    return sum
};