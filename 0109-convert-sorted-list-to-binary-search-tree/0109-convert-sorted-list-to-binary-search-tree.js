/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {

    if (head === null) return null

    //convert linked list to array
    let array = [];
    let stack = [head];
    while (stack.length) {
        let current = stack.pop()
        array.push(current.val)
        if(current.next !== null) stack.push(current.next)
    }
    // console.log(array)

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
    
    let midIndex = Math.floor(array.length / 2)
  
    return findMid(array, midIndex)
};


/*
Rank 225,506
Runtime: 99 ms, faster than 27.7%
Memory Usage: 51.4 MB, less than 5.26%
 */