/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    
    let fives = 0;
    let tens = 0;
    
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) fives++
        else if (bills[i] === 10) {
            if (fives > 0) {
                fives--;
                tens++;
            } else {
                return false
            }
        } else {
            if (tens> 0 && fives>0){
                tens--;
                fives--;
            } else if (tens === 0 && fives >=3) {
                fives -= 3;
            } else {
                return false
            }
            
        }
    }
    
    return true
};

/*
# Rank 195,534
# Date 5/19/2023
# Runtime: 63 ms, faster than 98.71%
# Memory Usage: 50.8 MB, less than 48.07%
*/