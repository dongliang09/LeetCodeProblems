/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.data = []
    this.size = maxSize;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.data.length < this.size) this.data.push(x)
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if (this.data.length > 0) return this.data.pop()
    else return -1
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    let endPos = k;

    if (endPos > this.data.length) endPos = this.data.length
    
    for (let i = 0; i < endPos; i++) {
        this.data[i] += val
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

/*
Date: 09/29/2024
Runtime: 86 ms, faster than 95.00% 
Memory Usage: 58.6 MB, less than 40.00%
*/