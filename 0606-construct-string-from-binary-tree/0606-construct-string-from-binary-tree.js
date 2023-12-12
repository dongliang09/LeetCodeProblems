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
 * @return {string}
 */
var tree2str = function(root) {

    if (root === null) return ""
    
    if(root.left === null && root.right === null) 
        return root.val + tree2str(root.left) + tree2str(root.right);
    else if (root.left === null) 
        return root.val + "()(" + tree2str(root.right) + ")";
    else if (root.right === null) 
        return root.val + "(" + tree2str(root.left) + ")";
    else
        return root.val + "(" + tree2str(root.left) + ")(" + tree2str(root.right) + ")";
        
};


/*
Rank 127,506
Runtime: 64 ms, faster than 58.56%
Memory Usage: 47 MB, less than 51.17% 

================ test case ==========
[1,2,null,3,4]


================ first try ============
    if(root.left === null && root.right === null) 
        return "";
    else if (root.left === null) 
        return "()(" + root.right.val + tree2str(root.right) + ")";
    else if (root.right === null) 
        return "(" + root.left.val + tree2str(root.left) + ")";
    else 
        return root.val + "(" + root.left.val + tree2str(root.left) + ")(" + root.right.val + tree2str(root.right) + ")";    


*/