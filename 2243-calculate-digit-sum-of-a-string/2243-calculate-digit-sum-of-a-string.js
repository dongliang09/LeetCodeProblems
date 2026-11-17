/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    
    let isLengthGreaterThanK = true

    if (s.length <= k) isLengthGreaterThanK = false

    while (isLengthGreaterThanK) {
        let arr = []
        for (let i = 0; i < Math.ceil(s.length / k); i++) {
            let currStr = s.slice(i*k, (i+1)*k)
            let sum = 0
            for (let j = 0; j < currStr.length; j++) {
                sum += Number(currStr[j])
            }
            arr.push(sum)
        }
        s = arr.join("")

        if (s.length <= k) isLengthGreaterThanK = false
    }

    return s
};

/**
Runtime: 0 ms Beats 100.00%
Memory: 56.60MB Beats 10.00%
 */