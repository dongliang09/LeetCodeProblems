/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {

    let output = 0;

    let weeks = Math.floor(n / 7);
    let extraDays = n % 7;

    // 1+2+3+4+5+6+7 = 28
    // week 2: 28 + 7
    // week 3: 28 + 7 + 7
    // week 4: 28 + 7 + 7 + 7
    // week 3: 28 + 7 + 7 + 7 + 7
    // adding 7 is like triangle

    // the add the whole weeks first 
    output = weeks * (28) + 7 * (0 + weeks - 1) * weeks / 2;

    //add extra days
    //the first days starts with the number of week
    let remain = 0;
    for (let i = weeks + 1; i <= extraDays + weeks; i++) {
        remain += i;
    }

    output = output + remain;

    return output
    
};

/**
Date: 10/25/2025
Runtime: 0ms beats 100%
Memory: 54.38 MB beats 32.08%
 */