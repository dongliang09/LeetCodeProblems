
var MyQueue = function() {
    this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let element = this.queue.reverse().pop()
    this.queue.reverse()
    return element
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queue[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queue.length === 0
};

/** 
# Rank 174,545
# Date 5/24/2023
# Runtime: 50 ms, faster than 90.32% 
# Memory Usage: 42.4 MB, less than 12.46%
================================
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */