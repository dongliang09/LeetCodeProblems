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
var getMinimumDifference = function(root) {
    let min = Infinity;

    let stack = [root];
    let lists = [];

    while (stack.length) {
        let current = stack.pop();
        lists.push(current.val);

        if (current.left !== null) {
            stack.push(current.left);
        }
        if (current.right !== null) {
            stack.push(current.right);
        }
    }
    
    lists.sort((a,b)=> a-b);

    for (let i = 1; i < lists.length; i++) {
        let diff = lists[i] - lists[i - 1]
        if (diff < min ) min = diff;
    }

    return min
};