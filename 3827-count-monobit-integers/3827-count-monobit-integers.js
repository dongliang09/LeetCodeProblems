/**
 * @param {number} n
 * @return {number}
 */
var countMonobit = function(n) {
    if (n === 0) return 1

    return Math.floor(Math.log2(n + 1)) + 1
};

/**
1 = 2^1 -1.
3 = 2^2 - 1.
7 = 2^3 - 1.
15 = 2^4 - 1.
31 = 2^5 - 1
63 = 2^6 - 1
127 = 2^7 - 1
255= 2^8 - 1
511= 2^9 - 1
1023= 2^10 - 1
 */