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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    
    let output = []
    // root.path = String(root.val);
    
    let stack = [root]
    
    while(stack.length) {
        let current = stack.pop()
                
        if (current !== root) {
            current.path = current.path + "->" + String(current.val)
        } else {
            current.path = String(current.val)
        }
        
        //push to output if current node is leaf
        if (current.left === null && current.right === null) {
            output.push(current.path)
        }
        
        // push children node to stack
        if (current.left !== null) {
            current.left.path = current.path
            stack.push(current.left)
        }
        
        if (current.right !== null) {
            current.right.path = current.path
            stack.push(current.right)
        }
    }
    
    return output
    
};