/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {

    const arr = [];
    let max = 0;

    let stack = [head];
    arr.push(head.val)

    while(stack.length) {
        let current = stack.pop()
        if (current.next !== null) {
            stack.push(current.next)
            arr.push(current.next.val)
        }
    }

    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] + arr[arr.length-1-i] > max) {
            max = arr[i] + arr[arr.length-1-i]
        }
    }

    return max
    
};


/**
Rank 199,606
Date: 05/16/2023
Runtime: 181 ms, faster than 43.54%
Memory Usage: 91.9 MB, less than 23.25% 
 */