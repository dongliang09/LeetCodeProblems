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
    //edge case
    if (root.left === null && root.right === null) return root.val === 0 ? false : true;
    
    //if current node is AND or OR, call recursively with child node
    if (root.val === 2) return evaluateTree(root.left) + evaluateTree(root.right);
    else if (root.val === 3) return evaluateTree(root.left) * evaluateTree(root.right);
};


/*
Date: 1/8/2024
Runtime: 70 ms, faster than 25.99% 
Memory Usage: 48.3 MB, less than 85.88% 
*/
