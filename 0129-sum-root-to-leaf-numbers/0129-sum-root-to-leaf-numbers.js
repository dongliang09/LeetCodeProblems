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
var sumNumbers = function(root) {
    
    //=============== idea ===========
    // each node will have "number" property that keep adding value of each node as string
    // when we reach the leaf node, we can convert the string to number, and add to sum
    
    //=============== code =========== 
    
    root.number = String(root.val)
    
    let sum = 0
    
    let stack = [root]
    
    while (stack.length) {
        let current = stack.pop()
        
        //check if it is leaf node
        if (current.left === null && current.right === null) {
            sum += Number(current.number)
        }
        
        //push to stack
        if (current.left !== null) {
            current.left.number = current.number + String(current.left.val)
            stack.push(current.left)
        }
        if (current.right !== null) {
            current.right.number = current.number + String(current.right.val)
            stack.push(current.right)
        }
    }
    
    
    return sum
};

/*
Rank 150,923
Date: 06/16/2023
Runtime:  65 ms, faster than 34.26%
Memory Usage: 42.1 MB, less than 82.49%
*/