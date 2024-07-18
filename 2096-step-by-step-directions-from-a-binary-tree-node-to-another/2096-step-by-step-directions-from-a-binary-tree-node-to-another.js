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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    
    let output = ""
    let isStartFound = false, isDestFound = false
    let startNodePath = "", destNodePath = ""
    
    root.path = ""
    let stack = [root]
    
    while ((!isStartFound || !isDestFound) && stack.length) {
        
        let curr = stack.pop();
        
        //check if we found both node
        if (curr.val === startValue) {
            isStartFound = true
            startNodePath = curr.path
        }
        if (curr.val === destValue) {
            isDestFound = true
            destNodePath = curr.path
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
    
    // console.log(startNode.path, destNode.path)

    // find the lowest common ancestor node's position
    let shortestPathLength = startNodePath.length < destNodePath.length ? startNodePath.length : destNodePath.length;
    let LCA_Position = 0
    for (let i = 0; i <= shortestPathLength; i++) {
        if (startNodePath[i] !== destNodePath[i]) {
            LCA_Position = i;
            break;
        }
    }
    
    // console.log(LCA_Position, startNodePath, destNodePath)
    let upArr = new Array(startNodePath.length - LCA_Position).fill('U')
    output = upArr.join("");

    output += destNodePath.slice(LCA_Position)
    
    return output
};

/*
============== test case ==============
[5,8,3,1,null,4,7,6,null,null,null,null,null,null,2]
4
3
*/