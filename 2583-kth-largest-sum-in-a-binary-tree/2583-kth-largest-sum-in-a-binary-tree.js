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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    
    // =============== idea ===================
    // use an object to store the sum of each level
    // sort the object.entries based on sum
       
    // =============== code ===================
    
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
    
    // sort by sum
    let levelSumEntry = Object.entries(levelSum).sort((a,b)=>Number(b[1])-Number(a[1]))
    
    if(!levelSumEntry[k-1]) return -1
    else return levelSumEntry[k-1][1]
    
};

/*
Rank 154,629
Date: 06/14/2023
Runtime: 386 ms, faster than 66.67%
Memory Usage: 120.8 MB, less than 16.67%
*/