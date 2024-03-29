/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    
    let output = [];
    
    if (root === null) return [];
    
    let stack = [root]
    
    while(stack.length) {
        let curr = stack.pop();
        
        output.push(curr.val);
        
        // preorder needs to reverse the order of children pushed into the stack
        if (curr.children.length > 0) {
            for (let i = curr.children.length- 1; i >= 0; i--) {
                stack.push(curr.children[i]);
            }
        }
        
    }
    
    return output;
    
};

/*
Date: 03/24/2024
Runtime: 72 ms, faster than 62.88% 
Memory Usage: 52.8 MB, less than 82.20%
*/