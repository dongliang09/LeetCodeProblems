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
var averageOfLevels = function(root) {
    
    let output = []
    
    let maxLevel = 0
    let count = {}
    /* structure of count
        count = {
            "1": {sum: xxx, numElements:xxx},
            "2": {sum: xxx, numElements:xxx}, ...
        }
    */
    
    root.level = 0
    let stack = [root]
    
    while(stack.length) {
        let current = stack.pop()
        
        // update data 
        if (current.level > maxLevel) maxLevel = current.level
        
        if (count[current.level]) {
            count[current.level].sum += current.val
            count[current.level].numElements++
        } else {
            count[current.level] = {}
            count[current.level].sum = current.val
            count[current.level].numElements = 1
        }
        
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
    
    // find avg of each level
    for (let i = 0; i <= maxLevel; i++) {
        output.push(count[i].sum / count[i].numElements)
    }
    
    return output
    
};