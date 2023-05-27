/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    
    let max = money + 1;
    
    for (let i = 0; i < prices.length; i++) {
        
        for (let j= 1; j < prices.length; j++) {
            
            if (i !== j && prices[i] + prices[j] < max) {
                max = prices[i] + prices[j]
            }
        }
    }
    
    return money - max < 0 ? money : money - max
    
};

/*
# Rank 170,464
# Date 5/27/2023
# Runtime: 95 ms, faster than 100.00% 
# Memory Usage: 46 MB, less than 100.00%
*/