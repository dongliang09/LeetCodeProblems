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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    
    let maxLevel = 0;
    let output = root.val;
        
    root.level = 0;
    let queue = [root];
    
    while (queue.length) {
        let curr = queue.shift();
        
        if (curr.level > maxLevel) {
            output = curr.val;
            maxLevel = curr.level
        }
        
        if (curr.left != null) {
            curr.left.level = curr.level + 1;
            queue.push(curr.left)
        }
        if (curr.right != null) {
            curr.right.level = curr.level + 1;
            queue.push(curr.right)
        }
    }
    
    return output
    
    
    
};