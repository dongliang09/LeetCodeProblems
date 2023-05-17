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
 * @return {boolean}
 */
var findTarget = function(root, k) {
     
    if (root.left === null && root.right === null) {
        return false
    }
    const numArr = []
    const stack = [root];
    
    while (stack.length) {
        let current = stack.pop();
        
        numArr.push(current.val)
        
        if (current.left !== null) stack.push(current.left)
        if (current.right !== null) stack.push(current.right)
    }
    
    console.log()
    
    for (let i = 0; i < numArr.length; i++) {
        for(let j = i + 1; j < numArr.length; j++) {
            if (numArr[i] + numArr[j] === k) return true
        }
    }
    
    return false
    
    
    
};

/*
Rank 199,606
Date: 05/17/2023
Runtime: 102 ms, faster than 29.03%
Memory Usage: 52.2 MB, less than 27.32%
*/