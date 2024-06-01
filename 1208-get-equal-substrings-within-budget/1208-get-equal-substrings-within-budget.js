/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    
    // find the difference between each position
    // use sliding window to find the max sum and max cost
    
    let diffArr = [];
    let maxLen = 0;
    let currSum = 0;
    let right = 0;
    
    for (let i = 0; i < s.length; i++) {
        diffArr.push(Math.abs(s.charCodeAt(i) - t.charCodeAt(i)));
    }
    
    if (s.length === 1 && diffArr[0] <= maxCost) return 1
    if (s === t) return s.length
    
    for (let i = 0; i < s.length; i++) {
        
        //add the right, add at least one number regardless
        do {
          currSum += diffArr[right];
          right++;
        } while (  currSum + diffArr[right] <= maxCost )
         
        // update max length    
        if (currSum <= maxCost && right - i > maxLen) maxLen = right - i;
        
        //remove left
        currSum = currSum - diffArr[i]
    }
    
    return maxLen
};


/*
Date: 6/1/2024
Rank: 108,563
Runtime: 56 ms, faster than 83.76% 
Memory Usage: 54.7 MB, less than 9.18%
============== test case =========
"krrgw"
"zjxss"
19
"ujteygggjwxnfl"
"nstsenrzttikoy"
43
*/