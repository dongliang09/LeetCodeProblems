/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    
    let list1Count = 0;
    let list2Count = 0;
    let currList1Node;
    let currNode = list1; 
    
    // go through linked list until ath node
    while (list1Count < a - 1) {
        currNode = currNode.next;
        list1Count++;
    }
    
    //make a shallow copy of ath node 
    currList1Node  = new ListNode(currNode);
    currList1Node.next = currNode.next;

    // connect to list 2
    currNode.next = list2;
    currNode = list2;
     
    // go throught all of list 2
    while (currNode.next !== null) {
        currNode = currNode.next
    }
    
    // find the bth node in list 1
    while (list1Count < b + 1) {
        currList1Node = currList1Node.next;
        list1Count++;
    }
    
    // connect list 2 to bth node of list 1, and no need to go through the rest of linked list
    currNode.next = currList1Node;
    currNode = currList1Node;
    
    return list1
    
    
};

/*
Date: 3/21/2024
Rank: 113,559
Runtime: 143 ms, faster than 86.48% 
Memory Usage: 61.6 MB, less than 86.75% 

*/