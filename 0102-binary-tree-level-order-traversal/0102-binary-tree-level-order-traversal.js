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
var levelOrder = function(root) {
    
    //==========idea ==============
    // ususally I like to use stack because stack.pop() is more efficient
    // since we need to do traversal from top to bottom, and from left to right
    // queue would be better in here
    
    // each node will have level property,
    // we will have a variable to indicate current level,
    // if node level is same as the variable, push node value into an array
    // if we reach a new level, we will push the array of previous level's elements into the final array
    
    
    // ==========code ============
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
    
    return output
    
};

/*
Rank: 150,923
Date: 06/16/2023
Runtime: 83 ms, faster than 22.42%
Memory Usage: 46.3 MB, less than 5.49%

*/