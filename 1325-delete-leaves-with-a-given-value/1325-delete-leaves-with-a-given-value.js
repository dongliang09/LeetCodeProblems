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
var removeLeafNodes = function(root, target, parent) {
    
    
    if (root === null ) return 
    
    
    removeLeafNodes(root.left, target, root)
    removeLeafNodes(root.right, target, root)
    
    if (parent !== undefined && root.val === target && root.left === null && root.right === null) {
        if (parent.left === root) parent.left = null
        else if (parent.right === root) parent.right = null
        return
    }
    
    if (parent === undefined && root.left === null && root.right === null && root.val === target) return null
    
    return root
};


/*

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