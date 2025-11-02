/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    
    let curr = head;
    let goodHead = null
    let lastGoodNode = null
    let count = 0;

    while (curr) {
        let currVal = curr.val
        if (nums.indexOf(currVal) === -1) {
            if (goodHead === null) {
                goodHead = curr;
                lastGoodNode = curr;
            }
            else {
                lastGoodNode.next = curr; //update the last good node's next state
                lastGoodNode = curr; //update the last good node to current node
            }
        } 
        curr = curr.next
    }

    lastGoodNode.next = null

    return goodHead
}; 