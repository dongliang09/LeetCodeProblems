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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    root.level = 0;
    let arr = []

    let stack = [root]
    while (stack.length) {
        let current = stack.pop();

        //odd level need to be even num and decreasing order
        //even level need to be odd, and increasing order
        if (current.level % 2 === 0) {
            if (current.val % 2 !== 1) return false;
            //push value if the array of that level is empty
            //else check if it is greater than the last element in the array
            //since we are checking backward, return false if greater
            if (!arr[current.level]) arr[current.level] = [current.val];
            else {
                if (current.val >= arr[current.level][arr[current.level].length - 1]) return false;
                arr[current.level].push(current.val);
            }
        } else {
            if (current.val % 2 !== 0) return false;
            if (!arr[current.level]) arr[current.level] = [current.val];
            else {
                if (current.val <= arr[current.level][arr[current.level].length - 1]) return false;
                arr[current.level].push(current.val);
            }
        }
        

        if (current.left) {
            current.left.level = current.level + 1;
            stack.push(current.left);
        }
        if (current.right) {
            current.right.level = current.level + 1;
            stack.push(current.right);
        }

    }

    return true
};

/*
Rank 248,417
Runtime: 337 ms, faster than 82.22%
Memory Usage: 85.6 MB, less than 91.11%
*/