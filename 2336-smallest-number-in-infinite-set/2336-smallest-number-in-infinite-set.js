var SmallestInfiniteSet = function() {
    // this.infiniteSet = new Set()
    this.dataArr = new Array(1000).fill(0)
    for (let i = 0 ; i < 1000; i++) {
        this.dataArr[i] = 1000 - i
    }
    
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    let min = this.dataArr.pop()
    return min
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (!this.dataArr.includes(num)) {
        this.dataArr.push(num)
    }
    this.dataArr.sort((a,b)=>b-a)
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 
 
 ================ test case =============
 ["SmallestInfiniteSet","popSmallest","addBack","popSmallest","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest"]
[[],[],[1],[],[],[],[2],[3],[],[]]

=> [null,1,null,1,2,3,null,null,2,3]
 */