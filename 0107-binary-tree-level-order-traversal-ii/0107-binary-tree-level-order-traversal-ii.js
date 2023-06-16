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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    
    //================idea =============
    // same as Binary Tree Level Order Traversal
    // but return output.reverse()
    
    //--------------borrow code from "Binary Tree Level Order Traversal" ----------
    
    let output = []
    
    if (root === null) return []
    
    root.level = 0
    let currentLvl = 0
    let queue = [root]
    let currentlvlArr = []
    
    while(queue.length) {
        let current = queue.shift()
        
        
        // compare level to indication of level
        if (current.level > currentLvl) {
            output.push(currentlvlArr)
            currentlvlArr = []
            currentLvl = current.level
            currentlvlArr.push(current.val)
        } else {
            currentlvlArr.push(current.val)
        }
        
        
        //push to queue
        if (current.left !== null) {
            current.left.level = current.level + 1
            queue.push(current.left)
        }
        
        if (current.right !== null) {
            current.right.level = current.level + 1
            queue.push(current.right)
        }
    }
    output.push(currentlvlArr)
    
    return output.reverse()
    
};