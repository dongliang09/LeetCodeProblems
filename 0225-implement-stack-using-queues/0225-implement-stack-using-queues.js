
var MyStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack.reverse().unshift(x)
    this.stack.reverse()
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let element = this.stack.reverse().shift()
    this.stack.reverse()
    return element
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.stack.length === 0
};

/** 
# Rank 174,545
# Date 5/24/2023
# Runtime: 49 ms, faster than 91.62%
# Memory Usage: 41.9 MB, less than 39.56%
================================

 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */