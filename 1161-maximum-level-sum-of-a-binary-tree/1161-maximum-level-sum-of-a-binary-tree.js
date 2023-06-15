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
var maxLevelSum = function(root) {
    
    let levelSum = {}
    root.level = 1
    
    let stack = [root]
    
    while (stack.length) {
        let current = stack.pop()
        
        // add to sum
        if (!levelSum[current.level]) levelSum[current.level] = current.val
        else levelSum[current.level] += current.val
        
        //push to stack
        if (current.left !== null) {
            current.left.level = current.level + 1
            stack.push(current.left)
        }
        if (current.right !== null) {
            current.right.level = current.level + 1
            stack.push(current.right)
        }
        
    }
    
    let max = Math.max(...Object.values(levelSum))
    
    let levelSumEntry = Object.entries(levelSum).sort((a,b)=>Number(a[0])-Number(b[0]))
                                                      
    for (let i = 0; i < levelSumEntry.length; i++) {
        if (levelSumEntry[i][1] === max) return Number(levelSumEntry[i][0])
    }
};