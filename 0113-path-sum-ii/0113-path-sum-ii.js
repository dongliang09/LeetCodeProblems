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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    
    let output = [];
    
    let stack = [];
    
    if (root === null) return output;
    root.currSum = root.val;
    root.path = [root.val];
    
    stack.push(root);
    
    while (stack.length) {
        let curr = stack.pop();
        
        // check current node status
        if (curr.left === null && curr.right === null && curr.currSum === targetSum) {
            output.push(curr.path);
        }
        
        // push child nodes into stack
        if (curr.left != null) {
            curr.left.currSum = curr.currSum + curr.left.val;
            curr.left.path = curr.path.slice();
            curr.left.path.push(curr.left.val);
            stack.push(curr.left);
        }
        if (curr.right != null) {
            curr.right.currSum = curr.currSum + curr.right.val;
            curr.right.path = curr.path.slice();
            curr.right.path.push(curr.right.val);
            stack.push(curr.right);
        }
    }
    
    return output
    
};