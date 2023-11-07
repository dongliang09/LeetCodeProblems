/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let length = 1;
    let current = head;
    
    if (current.next === null) return null;
    
    while (current) {
        length++;
        current = current.next;
    }
    
    let nthNodeNum = length - n;
    let nthNode, prev;
    let i = 1;
    current = head;

    while (current) {
        if (nthNodeNum === 1) {
            //if we need to remove the 1st node, just return the next node
            return current.next
        } else if (i === nthNodeNum) {
            if (current.next === null) {
                prev.next = null;
                return head
            }
            prev.next = current.next;  
        }
        i++;
        prev = current;
        current = current.next;
        
    }
    
    return head
};


/*
Rank 289,376
Runtime: 75 ms, faster than 85.55%
Memory Usage: 42.1 MB, less than 97.13%
*/