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
        
        if (curr.children.length > 0) {
            for (let i = curr.children.length- 1; i >= 0; i--) {
                stack.push(curr.children[i]);
            }
        }
        
    }
    
    return output;
    
};