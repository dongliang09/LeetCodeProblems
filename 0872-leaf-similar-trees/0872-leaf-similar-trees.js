/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

    if (root1 === null && root1 === null) return true;
    if (root1 === null || root2 === null) return false;

    let arr1 = [], arr2 = [];

    let stack1 = [root1];
    while (stack1.length) {
        let current1 = stack1.pop();

        // if (current1 !== null && current1 !== undefined && current1.left == null && current1.right == null) arr1.push(current1.val);

        // if (current1 !== null && current1 !== undefined && current1.left !== null && current1.left !== undefined) stack1.push(current1.left);
        // if (current1 !== null && current1 !== undefined && current1.right!== null && current1.right !== undefined) stack1.push(current1.right);
        if (!current1.left && !current1.right) arr1.push(current1.val);

        if (current1.left) stack1.push(current1.left);
        if (current1.right) stack1.push(current1.right);
    }

    let stack2 = [root2];
    while (stack2.length) {
        let current2 = stack2.pop();

        if (!current2.left && !current2.right) arr2.push(current2.val);

        if (current2.left) stack2.push(current2.left);
        if (current2.right) stack2.push(current2.right);
    }

    let str1 = arr1.join(",");
    let str2 = arr2.join(",");
    return (str1 === str2)
};

/*
Rank 248,417
Runtime: 101 ms, faster than 57.96%
Memory Usage: 44.3 MB, less than 74.34%
*/