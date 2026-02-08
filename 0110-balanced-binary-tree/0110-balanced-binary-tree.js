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
var isBalanced = function(root) {
    //================helper function ===========
    function getHeight (rootNode) {
      // Your code here
      if (!rootNode) return -1;
      if (rootNode.left === null && rootNode.right === null) return 0;

      let numNodeLeft = getHeight(rootNode.left)
      let numNodeRight = getHeight(rootNode.right)

      if (numNodeLeft > numNodeRight) {
        return numNodeLeft + 1
      } else {
        return numNodeRight + 1
      }

    };
    //==================main logic
    
    let queue = [root];   
    while (queue.length) {
        let currNode = queue.shift();
        if(currNode !== null) {
            if (Math.abs(getHeight(currNode.left) - getHeight(currNode.right)) > 1) {
              return false;
            }
        }
        
        if(currNode !== null && currNode.left) queue.push(currNode.left);
        if(currNode !== null && currNode.right) queue.push(currNode.right);
    }
  return true;
};