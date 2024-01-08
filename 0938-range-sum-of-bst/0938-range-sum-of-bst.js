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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let stack = [root];
    let sum = 0;

    while (stack.length) {
        let current = stack.pop();

        if ( low <= current.val && current.val <= high) sum += current.val;

        if(current.left) stack.push(current.left)
        if (current.right) stack.push(current.right)
    }

    return sum
};

/*
Rank 249,809
Runtime: 255 ms, faster than 70.22%
Memory Usage: 96.3 MB, less than 61.51%
*/