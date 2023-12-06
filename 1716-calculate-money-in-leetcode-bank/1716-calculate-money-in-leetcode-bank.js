/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    
    const completeWeeks = Math.floor(n / 7);
    const remainDays = n % 7;
    
    // first week is 1, second week is 2, third is 3 ....
    // 1 + ... + 7 = 28

    let base = completeWeeks * 28;
    // (1 + completeWeeks - 1) * (completeWeeks - 1) / 2 * 7;
    let extra = completeWeeks > 1 ? (completeWeeks) * (completeWeeks - 1) / 2 * 7 : 0;
    let moneyInCompleteWeeks = base + extra;    
        
    let moneyInReaminDays = 0; 
    
    if ( remainDays !== 0 ) {
        for ( let i = 0; i < remainDays; i ++) {
            moneyInReaminDays += (completeWeeks + 1 + i);
        }
    }
    
    return moneyInCompleteWeeks + moneyInReaminDays;
    
};