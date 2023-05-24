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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    let stack = [root]
    let numArr = []
    
    while(stack.length) {
        let current = stack.pop();
        
        numArr.push(current.val)
        if (current.left !== null) stack.push(current.left)
        if (current.right !== null) stack.push(current.right)
    }
    
    numArr.sort((a,b)=>a-b)
    
    return numArr[k- 1]
};