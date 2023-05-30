
var MyHashMap = function() {
    this.dataObj = {}
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.dataObj[key] = value
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    return this.dataObj[key] === undefined ? -1 : this.dataObj[key]
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    delete this.dataObj[key]
};

/** 
# Rank 1166,451
# Date 5/30/2023
# Runtime: 174 ms, faster than 82.69%
# Memory Usage: 52.4 MB, less than 49.69%

============================================
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */