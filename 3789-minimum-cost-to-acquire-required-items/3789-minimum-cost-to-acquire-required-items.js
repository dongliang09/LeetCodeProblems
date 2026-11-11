/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 */
var minimumCost = function(cost1, cost2, costBoth, need1, need2) {
    
    let output = 0

    if (costBoth <= cost1 + cost2) {
        let method1 = Math.max(need1, need2) * costBoth
        
        let method2 = 0
        let commonNeed = Math.min(need1, need2)
        method2 +=  commonNeed * costBoth
        if (need1 - commonNeed > 0) method2 += (need1 - commonNeed) * cost1
        if (need2 - commonNeed > 0) method2 += (need2 - commonNeed) * cost2

        if (method1 > method2) output = method2
        else output = method1
        
    } else {
        output = cost1 * need1 + cost2 * need2
    }

    return output
};