/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    
    if (nums1[nums1.length - 1] < nums2[0]) return -1
    
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) !== -1 ) return nums1[i]
    }
    
    return -1
};