/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.numArr = nums
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.numArr.push(val)
    this.numArr = this.numArr.sort((a,b)=>a-b)
    let arrLen = this.numArr.length
    return this.numArr[arrLen - this.k]
};

/** 
# Rank 177,187
# Date 5/22/2023
# Runtime:  3663 ms, faster than 7.70%
# Memory Usage: 69.7 MB, less than 6.56%

 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */