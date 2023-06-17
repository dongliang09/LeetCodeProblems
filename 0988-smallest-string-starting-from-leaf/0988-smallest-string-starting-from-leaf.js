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
var smallestFromLeaf = function(root) {
    
    let alphbets = 'abcdefghijklmnopqrstuvwxyz'
    
    root.string = alphbets[root.val]
    
    let stack = [root]
    
    let leafNodeStrArr = []
    
    while (stack.length) {
        let current = stack.pop()
        
        // check if it is leaf node
        if (current.left === null && current.right === null) {
            leafNodeStrArr.push(current.string)
        }
        
        // push to stack
        if (current.left !== null) {
            current.left.string = alphbets[current.left.val] + current.string
            stack.push(current.left)
        }
        if (current.right !== null) {
            current.right.string = alphbets[current.right.val] + current.string
            stack.push(current.right)
        }
        
    }
    
    leafNodeStrArr.sort()
    
    return leafNodeStrArr[0]
    
};