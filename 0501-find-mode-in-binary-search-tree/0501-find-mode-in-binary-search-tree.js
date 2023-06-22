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
 * @return {number[]}
 */
var findMode = function(root) {
    
    let output = []
    let freqCount = {}
    
    let stack = [root]
    
    while (stack.length) {
        let current = stack.pop()
        
        if (freqCount[current.val]) freqCount[current.val]++
        else freqCount[current.val] = 1
        
        if (current.left !== null) stack.push(current.left)
        if (current.right !== null) stack.push(current.right)
    }
    
    let max = Math.max(...Object.values(freqCount))
    let freqCountEntries = Object.entries(freqCount)

    for (let i = 0; i < freqCountEntries.length; i++) {
        if (freqCountEntries[i][1] === max) output.push(Number(freqCountEntries[i][0]))
    }
    
    return output
    
};