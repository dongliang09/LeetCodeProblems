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
    
    // ============= idea ==============
    // count the frequency of value in each node, store in an object
    // take the object values, and find the max frequency
    // look through object entries, if it has same frequency as max frequency, push into output array
    
    // ============= code ==============
    
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

/*
# Rank 142,221
# Date 06/22/2023
# Runtime: 103 ms, faster than 14.12% 
# Memory Usage: 51.9 MB, less than 22.94% 
*/