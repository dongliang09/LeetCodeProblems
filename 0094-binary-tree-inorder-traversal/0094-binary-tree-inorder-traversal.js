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
 * @return {number[]}
 */
var inorderTraversal = function(root, array= []) {
    let currentNode = root;
    if (currentNode !== null && currentNode.left === null && currentNode.right === null) {
      //console.log(currentNode.val);
      array.push(currentNode.val)
      return array;
    }
    if(currentNode !== null && currentNode.left !== null) inorderTraversal(currentNode.left, array);
    if (currentNode !== null) {
        //console.log(currentNode.val);
        array.push(currentNode.val)
    }
    if(currentNode !== null && currentNode.right !== null) inorderTraversal(currentNode.right, array);
    
    return array
};

/*
Rank 263,263
Runtime: 72 ms, faster than 81.71%
Memory Usage: 42.4 MB, less than 31.85%
*/