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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    
    root.level = 1;
    
    if (depth === 1) {
        return new TreeNode(val, root, null);
    }
    
    let stack = [root]     
    
    while (stack.length) {
        let curr = stack.pop();
        
        if (curr.level === depth - 1) {
            let leftNode = curr.left;
            let rightNode = curr.right;
            let newLeft = new TreeNode(val, leftNode, null);
            let newRight = new TreeNode(val, null, rightNode);
            curr.left = newLeft;
            curr.right = newRight;
        }
        
        if (curr.level < depth - 1) { 
            if (curr.left !== null) {
                curr.left.level = curr.level + 1;
                stack.push(curr.left);            
            }
            if (curr.right !== null) {
                curr.right.level = curr.level + 1;
                stack.push(curr.right);
            }
        }
        
    }
    
    return root
};

/*
[4,2,6,3,1,5]
1
1
*/