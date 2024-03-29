/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    if(root === null) return [];
    
    let output = [];
    root.level = 1;
    
    let stack = [root];
    
    while (stack.length) {
        let curr = stack.pop();
        
        if (curr.level > output.length) output.push([curr.val]); 
        else
            output[curr.level - 1].push(curr.val)
        
        if (curr.children.length > 0) {
            for (let i = curr.children.length- 1; i >= 0; i--) {
                curr.children[i].level = curr.level + 1;
                stack.push(curr.children[i])
            }
        }
        

    }
    
    return output
    
};

/*
Date: 03/29/2024
Rank: 112,824
Runtime: 62 ms, faster than 98.64% 
Memory Usage: 53 MB, less than 93.88%
*/