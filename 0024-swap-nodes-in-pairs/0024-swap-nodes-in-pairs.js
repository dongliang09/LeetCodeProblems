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
var swapPairs = function(head) {
    
    //================ idea ==============
    
    // store node of linked list into array
    // change the pointing of current node to different node based on the index of array (odd or even)
    
    //================ code ==============
    
    if (head === null || head.next === null) return head
    
    let nodeArr = []
    
    let isEnd = false
    let current = head
    
    while (!isEnd) {
        
        let previous = current
        current = current.next
        previous.next = null
        nodeArr.push(previous)
        
        
        if (current === null) isEnd = true
    }
    
    
    let firstNode, secondNode, lastNode;
    
    for (let i = 0; i < nodeArr.length; i++) {
        if (i % 2 === 0) {
            firstNode = nodeArr[i]
            
            if (i === nodeArr.length - 1) {
                lastNode.next = firstNode
            }
            
        } else {
            secondNode = nodeArr[i]

            if (lastNode === undefined) lastNode = secondNode
            
            lastNode.next = secondNode
            secondNode.next = firstNode
            lastNode = firstNode
        }
        
    }
    
    return nodeArr[1]



};

/**

# Rank 139,256
# Date 06/26/2023
# Runtime: 54 ms, faster than 80.89%
# Memory Usage: 41.8 MB, less than 84.53%

========= test case ================
[1,2,3] => [2,1,3]
[1,2,3,4,5] =>  [2,1,4,3,5]
[1,2,3,4,5,6] => [2,1,4,3,6,5]


=========second try ================

a cycle found inside the list

    if (head === null || head.next === null) return head

    let count = 1;
    const stack = [head] 
    let node1;
    let lastNode;

    while (stack.length) {
      let current = stack.pop();
      if (count === 2) head = current
      if (current.next !== null) {
          stack.push(current.next)  
      }
        
      if (count % 2 === 0) {
        current.next = node1;
        node1.next = current.next;
        if (count !== 2) lastNode.next = current
        else head.next = current
        lastNode = current
      } else {
        node1 = current
      }
      count++

    }

    return head

=========first try========

didn't account for the second pair's swap 
when the second node's next of first pair is pointing to the original first node of second pair

    if (head === null || head.next === null) return head

    let count = 1;
    const stack = [head] 
    let node1;
    let newHead

    while (stack.length) {
      let current = stack.pop();
      if (count === 2) newHead = current
      if (current.next !== null) stack.push(current.next)

      if (count % 2 === 0) {
        current.next = node1;
        node1.next = current.next;
      } else {
        node1 = current
      }
      count++

    }

    return newHead
 */