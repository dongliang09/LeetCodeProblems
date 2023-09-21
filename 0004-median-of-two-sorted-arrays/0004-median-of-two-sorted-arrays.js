/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const combineArrayConcat = nums1.concat(nums2);
    const combineArray = combineArrayConcat.sort(sortNumber);
    const newlength = combineArray.length;
    var median= 0;
    
    
    if (newlength % 2 === 0) {
        median = (combineArray[newlength/ 2 - 1] + combineArray[newlength/ 2]) /2;
    } else {
        median = combineArray[Math.floor(newlength/ 2)];
    }
    
    function sortNumber(a,b){
       return a - b;
    }
    
    return median;
};