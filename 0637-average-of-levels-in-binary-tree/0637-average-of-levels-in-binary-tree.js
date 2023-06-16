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
    
    // =============== idea ================
    // we will have an object to count each level's sum and number of elements
    // each node will have property of level
    // at the end, we can find the average of each level and push to output array
    
    // =============== codes ================
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

/*
Rank: 150,923
Date: 06/16/2023
Runtime: 70 ms, faster than 91.46%
Memory Usage: 47.8 MB, less than 23.37%

*/