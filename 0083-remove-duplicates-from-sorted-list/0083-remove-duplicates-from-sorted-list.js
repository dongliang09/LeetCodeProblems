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
var deleteDuplicates = function(head) {
    
    if (head === null) return head;
    
    let current = head;
    let prev;
    
    while (current) {
        if(current !== head && current.val === prev.val) {
            //if we have multiple consecutive nodes have same values
            while (current.next && current.next.val === prev.val) {     
                current = current.next;
            }
            prev.next = current.next;
        }
        prev = current;
        current = current.next;
    }
    
    return head
};


/*
Rank 296,715
Runtime: 74 ms, faster than 93.87%
Memory Usage: 44.3 MB, less than 42.09%
*/