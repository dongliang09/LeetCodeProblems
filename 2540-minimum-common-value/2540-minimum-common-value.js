/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {

    /**
        add all of one array into a set
        since both array are sorted, if anything match the set from the second
        then it is the answer, otherwise, no match
     */
     
    let num1set = new Set()
    for (let i = 0; i < nums1.length; i++) {
        num1set.add(nums1[i])
    }
    
    for (let i = 0; i < nums2.length; i++) {
        if (num1set.has(nums2[i])) return nums2[i]
    }
    
    return -1
};