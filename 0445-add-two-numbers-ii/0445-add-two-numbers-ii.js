/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let num1 = [];
    let num2 = []; //num1 and num2 will be started from most signficant to least signficiant digit    
    let stack1 =[l1]; 
    let stack2=[l2];

    while(stack1.length) {
        let current = stack1.pop();
        num1.push(current.val);
        if (current.next !== null) stack1.push(current.next)
    }
    
    while(stack2.length) {
        let current = stack2.pop();
        num2.push(current.val);
        if (current.next !== null) stack2.push(current.next)
    }
   
    let carryOver = 0;
    let num1Rev = num1.reverse();
    let num2Rev = num2.reverse();
    // console.log(num1Rev, num2Rev)
    let sum = []; //sum will be started from least signficant to most signficiant digit
    
    let longerLen = num1.length > num2.length ? num1.length : num2.length;
    for (let i = 0; i < longerLen; i++) {
        let num1Digit = num1Rev[i] !== undefined ? num1Rev[i] : 0;
        let num2Digit = num2Rev[i] !== undefined ? num2Rev[i] : 0;
        let currentSum = 0;
        if (num1Digit + num2Digit + carryOver > 9) {
            currentSum = (num1Digit + num2Digit + carryOver) % 10;
            carryOver = 1;
        } else {
            currentSum = num1Digit + num2Digit + carryOver;
            carryOver = 0;
        }
        sum.push(currentSum)
    }
    if (carryOver === 1) sum.push(1)
    
    
    // construe linked list
    let lastNode = null
    
    for (let i =0; i < sum.length; i++) {        
        let currentNode = new ListNode(sum[i], lastNode)
        lastNode = currentNode
    }
    
    return lastNode
    
};

/*

# Rank 182,536
# Date 5/20/2023
# Runtime: 90 ms, faster than 92.35%
# Memory Usage: 47.8 MB, less than 59.41%

=================test case ===========
[2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9]
[5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9]

*/