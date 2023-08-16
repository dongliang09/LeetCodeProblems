/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function partition(head: ListNode | null, x: number): ListNode | null {

    if (head === null) return null

    let targetFound = false;
    let targetUsed = false
    let lessThanArr : number[] = [];
    let lessThanIndex = -1;
    let beforeGreaterArr : number[] = [];
    let beforeGreaterIndex = -1;
    let targetCount = 0;
    //let targetIndex = -1
    let greaterThanArr : number [] = [];
    let greaterThanIndex = -1;

    let stack = [head] 

    while (stack.length) {
        let current = stack.pop();

        if (current.val < x) {
            lessThanArr.push(current.val)
        } else if (current.val === x) {
            if (targetFound) {
               greaterThanArr.push(x)
            }
            targetFound = true
        } else {
            if (targetFound) {
                greaterThanArr.push(current.val)
            } else {
                beforeGreaterArr.push(current.val)
            }
        }

        if (current.next !== null) stack.push(current.next)
    }

    if (lessThanArr.length > 0) lessThanIndex = 0
    if (beforeGreaterArr.length > 0) beforeGreaterIndex = 0
    //if (targetCount > 0) targetIndex = 0
    if (greaterThanArr.length > 0) greaterThanIndex = 0


    let newHeadVal : number
    if (lessThanArr.length > 0 ) {
        newHeadVal = lessThanArr[0]
        lessThanIndex = 1
    } else if (beforeGreaterArr.length > 0) {
        newHeadVal = beforeGreaterArr[0]
        beforeGreaterIndex = 1
    } else if (targetFound) {
        newHeadVal = x
        //targetIndex = 1
        targetUsed=true
    } else if (greaterThanArr.length > 0) {
        newHeadVal = greaterThanArr[0]
        greaterThanIndex = 1
    }

    let newHead = new ListNode(newHeadVal)
    let lastNode = newHead

    // console.log(newHead)

    while (lessThanIndex < lessThanArr.length && lessThanArr.length !== 0) {
        let newNode = new ListNode (lessThanArr[lessThanIndex])
        lastNode.next = newNode
        lastNode = newNode
        lessThanIndex++
    }

    while (beforeGreaterIndex < beforeGreaterArr.length  && beforeGreaterArr.length !== 0) {
        let newNode = new ListNode (beforeGreaterArr[beforeGreaterIndex])
        lastNode.next = newNode
        lastNode = newNode
        beforeGreaterIndex++
    }
/*
    while (targetIndex < targetCount  && targetCount !== 0) {
        let newNode = new ListNode (x)
        lastNode.next = newNode
        lastNode = newNode
        targetIndex++
    }
*/
    if (targetFound && !targetUsed){
       let newNode = new ListNode(x)
       lastNode.next = newNode
       lastNode = newNode
    }

    while (greaterThanIndex < greaterThanArr.length  && greaterThanArr.length !== 0) {
        let newNode = new ListNode (greaterThanArr[greaterThanIndex])
        lastNode.next = newNode
        lastNode = newNode
        greaterThanIndex++
    }   

    return newHead
};


/**

============= test case ==============
[1,2,0,3,1,2,1,0,2,2,2,1,0,2]
 */