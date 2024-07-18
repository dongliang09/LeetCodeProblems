/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let output
    let isPFound = false, isQFound = false
    let pNodePath = "", qNodePath = ""
    
    root.path = ""
    let stack = [root]
    
    while ((!isPFound || !isQFound) && stack.length) {
        
        let curr = stack.pop();
        
        //check if we found both node
        if (curr.val === p.val) {
            isPFound = true
            pNodePath = curr.path
        }
        if (curr.val === q.val) {
            isQFound = true
            qNodePath = curr.path
        }
        
        // find neighbors
        if (curr.left !== null) {
            curr.left.path = curr.path + "L"
            stack.push(curr.left)
        }
        if (curr.right !== null) {
            curr.right.path = curr.path + "R"
            stack.push(curr.right)
        }
    }

    // find the lowest common ancestor node's position
    let shortestPathLength = pNodePath.length < qNodePath.length ? pNodePath.length : qNodePath.length;
    let LCA_Position = 0
    for (let i = 0; i <= shortestPathLength; i++) {
        if (pNodePath[i] !== qNodePath[i]) {
            LCA_Position = i;
            break;
        }
    }
    
    // trace down the tree according to position
    let counter = 0
    let currNode = root
    
    while (counter < LCA_Position) {
        if (pNodePath[counter] === 'L') currNode = currNode.left
        else currNode = currNode.right
        counter++
    }
    
    output = currNode
    
    return output
};