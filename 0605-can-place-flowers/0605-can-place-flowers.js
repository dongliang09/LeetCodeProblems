/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    
    let lastIndex = -1;
    let count = 0;
    
    if (n=== 0) return true
    if (flowerbed.length === 1 && flowerbed[0] === 0) count++;


    for (let i = 0; i < flowerbed.length; i++) {
      if (flowerbed[i] === 0) {
        if (i === 0 && flowerbed[i + 1] === 0) {
          count++;
          lastIndex = i;
        }
        if (flowerbed[ i - 1] === 0 && flowerbed[i + 1] === 0 && i !== lastIndex + 1) {
          count++;
          lastIndex = i;  
        }
        if (i === flowerbed.length - 1 && i != lastIndex + 1 && flowerbed[i - 1] === 0) {
          count++;
        }

      }
      // console.log(count)
    } 

    if (count >= n) return true;
    else return false  
};


/*
Rank 220,544
Runtime: 65ms, faster than 76.14%
Memory Usage: 44.6 MB, less than 24.32%
*/