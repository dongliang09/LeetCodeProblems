/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    
    let result = [];
    let direction = ["right", "down", "left","up"]
    let directionIndex = 0;
    let currNode = head;
    let startX = 0;
    let startY = 0;
    let rightBound = n;
    let downBound = m;
    let leftBound = -1;
    let upBound = -1;

    // ------------helper function 
    function writeData() {
        if (directionIndex === 0) { //-----------right--change in Y
            bound = rightBound
            for (let i = startY; i < bound; i++) {
                if (currNode !== null) {
                    result[startX][i] = currNode.val;
                    currNode = currNode.next;
                }
                            
            }
            startX = startX + 1
            startY = bound- 1;
            upBound++;
        } else if (directionIndex === 1) { //-----------down -- change in X
            bound = downBound
            for (let i = startX; i < bound; i++) {
                if (currNode !== null) {
                    result[i][startY] = currNode.val;
                    currNode = currNode.next;
                }
            }
            startX = bound - 1
            startY = startY - 1;
            rightBound--;
        } else if (directionIndex === 2) { //----------left--change in Y
            bound = leftBound
            for (let i = startY; i > bound; i--) {
                if (currNode !== null) {
                    result[startX][i] = currNode.val;
                    currNode = currNode.next;
                }
            }
            startX = startX - 1
            startY = bound + 1;
            downBound--;
        } else  { //-----------------------------------up -- change in X
            bound = upBound
            for (let i = startX; i > bound; i--) {
                if (currNode !== null) {
                    result[i][startY] = currNode.val;
                    currNode = currNode.next;
                }
            }
            startX = bound + 1
            startY = startY + 1;
            leftBound++
        }
        directionIndex = (directionIndex + 1) % 4;
    }

    //--------------main function
    

    for (let i = 0; i < m; i++) {
        let negOneArr = new Array(n)
        negOneArr.fill(-1)
        result.push(negOneArr)
    }
    
    if (m === 1) {
        for (let i = 0; i < m*n; i++) {
            if (currNode !== null) {
                result[0][i] = currNode.val;
                currNode = currNode.next;
            }
        }
        return result
    }
    
    if (n === 1) {
        for (let i = 0; i < m*n; i++) {
            if (currNode !== null) {
                result[i][0] = currNode.val;
                currNode = currNode.next;
            }
        }
        return result
    }

    for (let i = 0; i < m*n; i++) {
        writeData()
    }

    return result
    
    
};

/*
Date: 9/9/2024
Rank: 110,357
Runtime: 787 ms, faster than 5.40% 
Memory Usage: 88 MB, less than 59.46% 
*/