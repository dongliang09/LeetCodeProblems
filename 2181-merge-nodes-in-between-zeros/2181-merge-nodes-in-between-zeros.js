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
        
        curr = curr.next
        
        
    }
    
    return headNode
    
};