/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const result = new Array(candies.length).fill(true)
    const max = Math.max(...candies)
    // console.log(max)
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies <  max) result[i] = false
    }
    return result
};

/**
# Rank 215,712
# Runtime: 69  ms, faster than 27.79%
# Memory Usage: 42.4 MB, less than 57.40%
 */