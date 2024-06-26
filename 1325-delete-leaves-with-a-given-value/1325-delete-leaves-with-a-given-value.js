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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    
    
    if (root === null ) return null
    
    // call all the nodes
    root.left = removeLeafNodes(root.left, target)
    root.right = removeLeafNodes(root.right, target)
    
    // modify if leaf node value equals to target
    if (root.val === target && root.left === null && root.right === null) return null

    return root
};


/*
Date: 05/17/2024
Rank: 108,801
Runtime: 72 ms, faster than 64.26% 
Memory Usage: 54 MB, less than 37.87%

=================== test case ================


[1,1,1]
1

=================== first attempt ================

// should be a recursive call or DFS

    let queue = []
    queue.push(root)
    
    while (queue.length) {
        let curr = queue.shift();
        
        // remove leaf
        if (curr.left !== null && curr.left.val === target) {
            if (curr.left.left === null && curr.left.right === null) curr.left = null
        }
        if (curr.right !== null && curr.right.val === target) {
            if (curr.right.left === null && curr.right.right === null) curr.right = null
        }
        
        // push to stack
        if (curr.left !== null) {
            queue.push(curr.left)
        }
        if (curr.right !== null) {
            queue.push(curr.right)
        }
        

    }
    
    return root
*/