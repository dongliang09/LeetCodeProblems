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
            if (tickets[k] <= 0) {
                break;
            }
        }
        output += currCount;
        count--;
    }
    
    return output
    
};