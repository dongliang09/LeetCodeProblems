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
var reverseList = function(head) {
    
    //console.log(head)
    if (head === null) return head
    
    let A = [head];
    let valArr = [head.val];
    
    let i = 0;
    while (A[i].next !== null) {
        A.push(A[i].next);    
        i++;
        valArr.push(A[i].val);
    }
    //console.log(valArr)
    
    for (let i = 0; i < A.length; i++) {
        A[i].val = valArr[valArr.length - 1 -i];
    }
    
    return head
};


/*
Rank 331,581
Runtime: 69 ms, faster than 92.21%
Memory Usage: 43.6 MB, less than 96.85%
*/