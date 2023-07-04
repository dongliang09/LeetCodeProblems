/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    
    // ======== idea ==========
    // first check if both array have the same number, if they do, return that number
    // otherwise, take the smallest number from each array to form a smallest number
    
    
    // ======== code ========== 
    
    nums1.sort((a,b)=>a-b)
    nums2.sort((a,b)=>a-b)
    
    for (let i = 0 ; i < nums1.length; i++) {
        
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) return nums1[i]
        }
    }
    
    let small1 = nums1[0], small2 = nums2[0]
    
    if (small1 < small2) return Number(String(small1) + String(small2))
    else return Number(String(small2) + String(small1))
    
};


/*
# Rank 135,450
# Date 07/03/2023
# Runtime: 71 ms, faster than 18.14%
# Memory Usage: 43.9 MB, less than 13.49%

=========== test case =========
[6,4,3,7,2,1,8,5]
[6,8,5,3,1,7,4,2]
=> 1
*/