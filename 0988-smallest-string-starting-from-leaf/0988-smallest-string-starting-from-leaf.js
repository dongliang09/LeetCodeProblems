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
    
    //=============== idea ===========
    // each node will have "string" property that keep adding new letter to parent's string
    // when we reach the leaf node, we can store the string to an array
    // at the end, sort the array, it is sorted lecicographically, return the first element of array 
    
    //=============== code =========== 
    
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

/*
Rank 150,923
Date: 06/16/2023
Runtime:  72 ms, faster than 88.46%
Memory Usage: 49.7 MB, less than 26.92% 
*/
