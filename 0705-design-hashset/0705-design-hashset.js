
var MyHashSet = function() {
    this.data = []
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if (this.data.indexOf(key) === -1) {
        this.data.push(key)
    }
    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let index = this.data.indexOf(key)
    if (index !== -1) {
        this.data.splice(index,1)
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.data.indexOf(key) !== -1
};

/** 
# Rank 167,156
# Date 5/29/2023
# Runtime: 290 ms, faster than 25.07%
# Memory Usage: 50.7 MB, less than 97.08%

============================================
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */