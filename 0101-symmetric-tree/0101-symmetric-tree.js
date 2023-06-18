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
var isSymmetric = function(root) {
    
    
    // ==================== idea ================
    // the problem is very similar to "Same Tree" problem
    // except the left node and right node are switched
    // therefore we need to switch the order for left node and right node pushed to stack
    
    
    // ==================== code ================
    let stackP = [root.left];
    let stackQ = [root.right];
    while (stackP.length) {
        let currentP = stackP.pop();
        let currentQ = stackQ.pop();

        if (currentP !== null && currentQ !== null) {

            if (currentP.val !== currentQ.val) return false

            let currentPLeft = currentP.left === null ? "null" : currentP.left.val.toString();
            let currentQLeft = currentQ.left === null ? "null" : currentQ.left.val.toString();
            let currentPRight = currentP.right === null ? "null" : currentP.right.val.toString();
            let currentQRight = currentQ.right === null ? "null" : currentQ.right.val.toString();
            let stringP = currentPLeft + " " + currentPRight;
            let stringQ = currentQRight + " " + currentQLeft; // also switch position because of symmetric
            if (stringP !== stringQ) return false;

            if (currentP.left) stackP.push(currentP.left);
            if (currentP.right) stackP.push(currentP.right);
            
            // because it is symmetric, push right to stack first, then left to stack
            if (currentQ.right) stackQ.push(currentQ.right);
            if (currentQ.left) stackQ.push(currentQ.left);
            

        } else if (currentP === null && currentQ === null) return true
        else return false


    }
    
    return true;
    
    
};

/*

Rank 146,593
Date: 06/17/2023
Runtime: 62 ms, faster than 86.45% 
Memory Usage: 44.9 MB, less than 25.01%
*/