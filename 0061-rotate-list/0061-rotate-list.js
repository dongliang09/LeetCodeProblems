
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

    if (head === null) return null
    if (head.next === null || k === 0) return head

    // get a count how many node we need to rotate 
    // remember the tail, the new head and the node before the new head
    // then we connect the new list from tail to head, and break the lastNode and new head

    let nodeCount = 0;
    let curr = head
    let tail, newHead, lastNode

    // find how many we need to rotate, and find the tail
    while (curr) {
        nodeCount++;
        if (curr.next === null) tail = curr
        curr = curr.next;
    }
    
    let rotateCount = nodeCount - k % nodeCount    

    if(k % nodeCount === 0 && k !== 1) return head
    
    curr = head

    // find new head, and last node
    while (curr) {
        if (rotateCount === 0) {
            newHead = curr
            break;
        } else if (rotateCount === 1) {
            lastNode = curr
        }
        
        if (curr.next === null) curr = head 
        else curr = curr.next;
        
        rotateCount--;
    }

    lastNode.next = null
    tail.next = head

    return newHead
    
};

/**
============== test case ===============
head = [1,2], k = 1 => expected [2, 1]
 */


