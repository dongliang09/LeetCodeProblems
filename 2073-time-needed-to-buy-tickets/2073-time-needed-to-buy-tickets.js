/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    
    let count = tickets[k];
    let output = 0;
    
    while (count > 0) {
        let currCount = 0;
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i] > 0) {
                currCount++;
                if (tickets[i] > 0) tickets[i]--;
            }
            // if kth element goes to 0, no need to continute the rest
            if (tickets[k] <= 0) {
                break;
            }
        }
        output += currCount;
        count--;
    }
    
    return output
    
};

/*
Date: 04/08/2024
Rank: 109,492
Runtime: 53 ms, faster than 66.12% 
Memory Usage: 48.9 MB, less than 69.95% 
*/