/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let current = node;
    let nextNode = current.next;
    
    current.val = nextNode.val;
    current.next = nextNode.next;
    
};

/*
Rank 289,376
Runtime: 59 ms, faster than 99.50%
Memory Usage: 43.9 MB, less than 85.20%
*/