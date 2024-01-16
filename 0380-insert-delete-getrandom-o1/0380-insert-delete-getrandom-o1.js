
var RandomizedSet = function() {
    this.obj = new Set();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(!this.obj.has(val)) {
        this.obj.add(val);
        return true;
    } else {
        return false;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.obj.has(val)) {
        this.obj.delete(val);
        return true;
    } else {
        return false;
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let arr = [...this.obj];
    return arr[Math.floor(Math.random() * this.obj.size)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */




/*
Rank 267,888
Runtime: 489 ms, faster than 83.76%
Memory Usage: 93.9 MB, less than 87.89% 
*/