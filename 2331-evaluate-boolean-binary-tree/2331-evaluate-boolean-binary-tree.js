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
var evaluateTree = function(root) {
    
    if (root.left === null && root.right === null) return root.val === 0 ? false : true;
    
    // let isLeftNodeBool = root.left.val === 0 || root.left.val === 1;
    // let isRightNodeBool = root.right.val === 0 || root.right.val === 1;
    // if (isLeftNodeBool && isRightNodeBool) {
    //     // if both leaf are 0 or 1
    //     if (root.val === 2) return root.left.val + root.right.val;
    //     else if (root.val === 3) return root.left.val * root.right.val;
    // } else {
    //     evaluateTree
    // }
    
    if (root.val === 2) return evaluateTree(root.left) + evaluateTree(root.right);
    else if (root.val === 3) return evaluateTree(root.left) * evaluateTree(root.right);
};