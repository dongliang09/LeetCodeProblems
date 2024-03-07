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
var middleNode = function(head) {
    var A = [head];
    var length = 0;
    var index = 0;
    
    var i = 0
    
    while (A[i].next !== null) {
        A.push(A[i].next);
        i++;
    }
    
    length = A.length;
    
    if (length % 2 == 0 ) {
        index = length / 2 ;
    } else {
        index = (length - 1 ) /2;
    }
    
    return A[index];
};