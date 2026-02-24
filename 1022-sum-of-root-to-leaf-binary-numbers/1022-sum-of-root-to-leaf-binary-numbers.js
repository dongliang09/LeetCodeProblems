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
var sumRootToLeaf = function(root) {

    if (root === null) return 0

    root.str = root.val.toString();

    let stack = [root]
    let output = 0;

    while (stack.length) {
        let curr = stack.pop();

        if (curr.left === null && curr.right === null) output += parseInt(curr.str, 2);
        else {
            if (curr.left !== null ) {
                curr.left.str = curr.str + curr.left.val.toString();
                stack.push(curr.left)
            }
            if (curr.right !== null ) {
                curr.right.str = curr.str + curr.right.val.toString();
                stack.push(curr.right)
            }
        }
    }
    
    return output
};