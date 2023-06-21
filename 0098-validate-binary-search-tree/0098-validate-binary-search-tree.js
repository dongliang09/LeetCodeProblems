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
var isValidBST = function(root) {
    
    
    // ===============idea ==============
    // each node need to check left and right children nodes
    // since we need to take care the order of left and right node, 
    // we will recursively calling the left node until we reach null,
    // then call the right node
    // store each node's value in array as we traverse the tree
    // as the final act, check if the values are ordered from smallest to biggest in the array
    
    // =============== code ===============
    let treeArr = []
    let isValid = true
    
    //----------- helper function -----------
    function binaryTreeTraverse(root) {

        // Check the base case
        if (root === null) return ;
        
        if ((root.left && root.left.val >= root.val) || (root.right && root.right.val <= root.val)) {
            isValid = false
        }
        
        if (isValid) {
            // Recursively call left and right nodes
            const leftSum = binaryTreeTraverse(root.left);
            treeArr.push(root.val)
            const rightSum = binaryTreeTraverse(root.right);
        }
        
        return
    }
    
    // ----------- main code -----------
    binaryTreeTraverse(root)
    
    if (isValid) {
        for (let i = 0; i < treeArr.length - 1; i++) {
            if (treeArr[i] >= treeArr[i + 1]) return false
        }
        return true
    }
    else return false
    
};

/*

# Rank 142,813
# Date 06/21/2023
# Runtime: 81 ms, faster than 16.29%
# Memory Usage: 46.7 MB, less than 35.62%

================first try =========

    // only checked immediate parent-children, need to look at bigger pic
    
    let stack = [root]
    
    while (stack.length) {
        let current = stack.pop()
        console.log(current.val)
        
        // minmum checkpoint on each node and push to queue/stack
        
        
        if (current.right !== null) {
            if (current.right.val <= current.val) return false
            stack.push(current.right)
        }
              
        if (current.left !== null) {
            if (current.left.val >= current.val) return false
            stack.push(current.left)
        }
    }
    
    return true

==============test case ============
[5,4,6,null,null,3,7]

*/