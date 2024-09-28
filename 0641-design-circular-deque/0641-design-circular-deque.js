/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.data = []
    this.k = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.data.length >= this.k) return false
    else this.data.unshift(value)
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.data.length >= this.k) return false
    else this.data.push(value)
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.data.length <= 0 ) return false
    else this.data.shift()
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.data.length <= 0) return false
    else this.data.pop()
    return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.data.length <= 0) return -1
    else return this.data[0]
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.data.length <= 0) return -1
    else return this.data[this.data.length - 1]
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    if (this.data.length === 0 ) return true
    else return false
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    if (this.data.length >= this.k) return true
    else return false
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

/*
Date: 09/28/2024
Runtime: 98 ms, faster than 56.06% 
Memory Usage: 58.3 MB, less than 72.73%
*/