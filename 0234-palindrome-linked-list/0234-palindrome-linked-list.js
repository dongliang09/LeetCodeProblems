/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    let A = [head];
    let numArr = [head.val];
    let i = 0;

    while (A[i].next !== null) {
        A.push(A[i].next);
        i++;
        numArr.push(A[i].val)
    }
    //console.log(numArr)
    
    for ( let i = 0; i < numArr.length / 2; i++) {
        if (numArr[i] !== numArr[numArr.length - 1 -i]) return false
    }
    return true
};

/*
Rank 331,581
Runtime: 266 ms, faster than 40.77%
Memory Usage: 85.7 MB, less than 24.20%

====================first try====

    var A = [head];
    var reverseArray = [];
    
    var finalResult = false;
    var middleIndex = 0;
    var sliceIndex = 0;
    var arrayLength = 0;
    var i = 0;
    
    while (A[i].next !== null) {
        A.push(A[i].next);
        i++;
    }
    
    arrayLength = A.length;
    
    if (arrayLength % 2 === 0) {
        //for example, 6 will take index 3, get 3 elements after slice
        middleIndex = arrayLength / 2;
        sliceIndex = middleIndex;
    } else {
        //for example, 5 will take index 3, get 2 elements after slice
        middleIndex = (arrayLength - 1) / 2;
        sliceIndex = middleIndex + 1;
    }
    
    console.log(A)
    //reverseArray = A[arrayLength - 1].slice(sliceIndex, arrayLength).reverse();
    
    if (reverseArray === A[middleIndex - 1]) {
        finalResult = true;
    }
    
    
    return finalResult;

*/