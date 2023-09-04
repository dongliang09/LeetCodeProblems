/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    let current = head;
    let fastcurrent = head;
    
    if (head === null || head.next === null) return false;
    
    while (current) {
              
        if (fastcurrent.next === null || fastcurrent.next.next === null || current.next === null ) return false
        fastcurrent = fastcurrent.next;
        fastcurrent = fastcurrent.next;
        current = current.next; 
        
        if (current === fastcurrent) return true;
    }
    
    return false
};

/*
Rank 300,406
Runtime: 124 ms, faster than 42.37% 
Memory Usage: 45 MB, less than 58.47%
=============test case=========
[]
-1
[1,2]
-1
[1,1,1,1]
-1
*/