/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    
    let head = null
    let treeNodeObj = {}
    
    let parentSet = new Set()
    let childSet = new Set()
    
    // store each tree node into object
    for (let i = 0; i < descriptions.length; i++) {
        
        let [parent, child, isLeft] = descriptions[i];
        
        parentSet.add(parent)
        childSet.add(child)
        
        if (treeNodeObj[parent] === undefined) {
            treeNodeObj[parent] = new TreeNode(parent)
        } 
        
        if (isLeft) {
            if (treeNodeObj[child] === undefined) {
                treeNodeObj[parent].left = new TreeNode(child)
                treeNodeObj[child] = treeNodeObj[parent].left
            } else
                treeNodeObj[parent].left =treeNodeObj[child]
        }
        else  {
            if (treeNodeObj[child] === undefined) {
                treeNodeObj[parent].right = new TreeNode(child)
                treeNodeObj[child] = treeNodeObj[parent].right
            } else
                treeNodeObj[parent].right =treeNodeObj[child]
        }
    }
    
    // find root value
    for (const element of childSet) {
        parentSet.delete(element);
    }
    
    let rootVal = [...parentSet][0]
    head = treeNodeObj[rootVal]
    
    return head
};

/*
Date: 07/15/2024
Rank: 110,207
Runtime: 380 ms, faster than 31.43%
Memory Usage: 77.7 MB, less than 71.43%

============ test case ===========
[[85,82,1],[74,85,1],[39,70,0],[82,38,1],[74,39,0],[39,13,1]]
*/