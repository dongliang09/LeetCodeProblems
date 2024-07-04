/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    
    let sum = 0; 
    let headNode = new ListNode()
    let currNode = headNode
    
    // skip first node
    let curr = head.next
    
    while (curr !== null) {
        if (curr.val === 0) {
            currNode.val = sum;
            sum = 0;
            if (curr.next === null) {
                currNode.next = null
            } else {
                currNode.next = new ListNode()
                currNode = currNode.next
            }
            
        } else {
            sum += curr.val
        }
        
        //update current node with next node
        curr = curr.next
 
    }
    
    return headNode
    
};

/*
Date: 07/03/2024
Rank: 110,381
Runtime: 516 ms, faster than 53.92%
Memory Usage: 102 MB, less than 22.55%
*/