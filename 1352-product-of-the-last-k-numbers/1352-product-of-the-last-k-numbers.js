
var ProductOfNumbers = function() {
    this.data = []
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.data.push(num)
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    let product = 1
    let dataLen = this.data.length
    for (let i = 0; i < k; i++) {
        product *= this.data[dataLen - 1 - i]
    }
    return product
};

/** 

# Rank 127,549
# Date 07/12/2023
# Runtime: 1655 ms, faster than 39.29%
# Memory Usage:  74.1 MB, less than 55.36%

====================
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */