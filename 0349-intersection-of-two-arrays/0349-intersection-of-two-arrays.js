/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    const intersection = new Set();

    for (const elem of set2) {
        if (set1.has(elem)) {
          intersection.add(elem);
        }
    }
    return [...intersection];
};

/*
Rank 277,854
Runtime: 68 ms, faster than 91.74% 
Memory Usage: 43.6 MB, less than 47.57% 
*/