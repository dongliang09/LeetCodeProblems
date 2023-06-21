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
    
    let treeArr = []
    let isValid = true
    
    //===========helper function ============
    function binaryTreeTraverse(root) {

        // Check the base case
        if (root === null) return ;
        
        if ((root.left && root.left.val >= root.val) || (root.right && root.right.val <= root.val)) {
            isValid = false
        }
        
        if (isValid) {
            // Recursively sum up the left and right trees
            const leftSum = binaryTreeTraverse(root.left);
            treeArr.push(root.val)
            const rightSum = binaryTreeTraverse(root.right);
        }
        
        return
    }
    
    // ========= main code ==================
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

function binaryTreeSum(root) {

    // Check the base case
    if (root === null) return 0;

    // Recursively sum up the left and right trees
    const leftSum = binaryTreeSum(root.left);
    const rightSum = binaryTreeSum(root.right);

    // Return the value plus the left and right totals
    return root.value + leftSum + rightSum;
}

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