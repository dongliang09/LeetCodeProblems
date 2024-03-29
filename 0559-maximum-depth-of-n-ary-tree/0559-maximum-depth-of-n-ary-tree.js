/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    // node structure
    // {
    //   val: 3,
    //   children: [ { val: 5, children: [] }, { val: 6, children: [] } ]
    // }

    if(root === null) return 0;
    
    let output = 0;
    root.level = 1;
    
    let stack = [root];
    
    while (stack.length) {
        let curr = stack.pop();
        
        if (curr.level > output) output = curr.level;  
        
        if ( curr.children.length > 0)
            curr.children.forEach(element=> {
                element.level = curr.level + 1;
                stack.push(element)
            })

    }
    
    return output
    
};

/*
Date: 03/29/2024
Runtime: 65 ms, faster than 62.91% 
Memory Usage: 52.7 MB, less than 54.48%
*/