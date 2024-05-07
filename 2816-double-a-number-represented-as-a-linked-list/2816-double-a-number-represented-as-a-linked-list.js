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
var doubleIt = function(head) {
    
    let arr = [];
    let doubleArr = [];
    
    // store value of every digit
    if (head.val > 4) arr.push(0);
    
    let curr = head;
    
    while (curr !== null) {
        arr.push(curr.val)
        if (head.val > 4 && curr.next === null) {
            curr.next = new ListNode(0, null)
            break;
        }
        curr = curr.next
    }
    
    // need to perform multiplication
    let carryOver = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        let curr = arr[i] * 2 + carryOver;
        if (curr >= 10) {
            carryOver = 1;
            curr -= 10;
        } else {
            carryOver = 0;
        }
        doubleArr.push(curr)
    }

    doubleArr = doubleArr.reverse();
    
    // replace values in listed list
    let index = 0;
    
    curr = head;
    
    while (curr !== null) {
        curr.val = doubleArr[index];
        index++;
        curr = curr.next
    }
    
    return head
};