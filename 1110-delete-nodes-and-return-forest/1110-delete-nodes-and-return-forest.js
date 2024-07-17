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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    
    let outputObj = {}
        
    outputObj[root.val] = root
    
    let stack = [root];
    
    while (stack.length) {
        let curr = stack.pop();
    
        // if current val is in to_delete list
        if (to_delete.indexOf(curr.val) !== -1 ) {
            delete outputObj[curr.val]
            if (curr.left !== null) outputObj[curr.left.val] = curr.left
            if (curr.right !== null) outputObj[curr.right.val] = curr.right
        }
            
        // find neighbors
        if (curr.left !== null) {
            stack.push(curr.left)
        }
        if (curr.right !== null) {
            stack.push(curr.right)
        }
        
        // check any child node's values is in to_delete list
        if (curr.left !== null && to_delete.indexOf(curr.left.val) !== -1) {
            let currLeft = curr.left
            if (currLeft.left !== null)
                outputObj[currLeft.left.val] = currLeft.left
            if (currLeft.right !== null)
                outputObj[currLeft.right.val] = currLeft.right
            
            curr.left = null
        } 
        
        if (curr.right !== null && to_delete.indexOf(curr.right.val) !== -1) {
            let currRight = curr.right
            if (currRight.left !== null)
                outputObj[currRight.left.val] = currRight.left
            if (currRight.right !== null)
                outputObj[currRight.right.val] = currRight.right
            curr.right = null
        } 
    }
    
    return Object.values(outputObj)
    
};

/*
Date: 07/17/2024
Rank: 109,973
Runtime: 100 ms, faster than 8.86%
Memory Usage: 58.2 MB, less than 13.50%
*/