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
    
    // ============ idea =============
    // recursivly call the middle point to divide the current array into three parts, 
    // left sub-array will call the function again , 
    // middle point will become a treeNode, 
    // right sub-array will also call the function again 
    
    // ============ code =============
    // borrow code from "109. Convert Sorted List to Binary Search Tree"
    // ------------- helper function -------------
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
    
    // ------------- main code ---------------
    let midIndex = Math.floor(nums.length / 2)
  
    return findMid(nums, midIndex)
    
};

/*
# Rank 132,168
# Date 07/04/2023
# Runtime: 78 ms, faster than 32.22%
# Memory Usage: 44.7 MB, less than 34.11%

*/