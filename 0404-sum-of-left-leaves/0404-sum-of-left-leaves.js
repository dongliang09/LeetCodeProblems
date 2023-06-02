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
var sumOfLeftLeaves = function(root) {
    
    let sum = 0
    
    let stack = [root]
    
    while(stack.length) {
        let current = stack.pop();
        
        //add extra property to the node
        // if it is leaf, property is true, else it is false
        if (current !== null && current.left === null && current.right === null) {
            current.leaf = true
        } else if (current !== null) {
            current.leaf = false
        }
        
        if (current !== null && current.left !== null) {
            stack.push(current.left)
        }
        if (current !== null && current.rigth !== null) {
            stack.push(current.right)
        }
    }
    
    // run second time
    stack.push(root)
    
    while(stack.length) {
        let current = stack.pop();
        
        // add extra property to the node
        // if it is leaf, property is true, else it is false
        if (current !== null && current.left !== null && current.left.leaf) {
            sum += current.left.val
        }
        
        if (current !== null && current.left !== null) {
            stack.push(current.left)
        }
        if (current !== null && current.rigth !== null) {
            stack.push(current.right)
        }
    }
    
    return sum
    
};