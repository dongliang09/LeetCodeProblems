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

    // find the lowest common ancestor node's position
    let shortestPathLength = startNodePath.length < destNodePath.length ? startNodePath.length : destNodePath.length;
    let LCA_Position = 0
    for (let i = 0; i <= shortestPathLength; i++) {
        if (startNodePath[i] !== destNodePath[i]) {
            LCA_Position = i;
            break;
        }
    }

    // take care the left part from start node to LCA node
    let upArr = new Array(startNodePath.length - LCA_Position).fill('U')
    output = upArr.join("");

    //take care right part from LCA node to dest node
    output += destNodePath.slice(LCA_Position)
    
    return output
};

/*
Date: 07/18/2024
Rank: 109,644
Runtime: 241 ms, faster than 64.03% 
Memory Usage: 86.9 MB, less than 98.15% 

============== test case ==============
[5,8,3,1,null,4,7,6,null,null,null,null,null,null,2]
4
3
*/