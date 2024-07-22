/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    
    score.sort((a,b)=>b[k]-a[k])
    
    return score
    
};

/*
Date:07/22/2024
Rank: 108,843
Runtime: 113 ms, faster than 34.68%
Memory Usage: 59 MB, less than 89.60%
*/