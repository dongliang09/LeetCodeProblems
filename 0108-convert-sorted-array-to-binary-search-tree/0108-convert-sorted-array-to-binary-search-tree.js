/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    
    // borrow code from "109. Convert Sorted List to Binary Search Tree"
    // recursive function call to make midpoint a node
    function findMid(currArray, middle) {

        if (currArray.length === 0) return null

        let current = new TreeNode(currArray[middle])
        if (currArray.length === 1) return current

        let leftArr = currArray.slice(0, middle);
        let rightArr = currArray.slice(middle+ 1);
        let currLeftMid = Math.floor(leftArr.length / 2);
        let currRightMid = Math.floor(rightArr.length / 2);
     
        current.left = findMid(leftArr, currLeftMid)
        current.right = findMid(rightArr, currRightMid)
        return current
    }
    
    let midIndex = Math.floor(nums.length / 2)
  
    return findMid(nums, midIndex)
    
};