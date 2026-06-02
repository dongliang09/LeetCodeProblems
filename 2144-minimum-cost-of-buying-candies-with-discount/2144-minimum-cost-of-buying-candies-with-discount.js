/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    
    /*
     since the third one need to be less or equal to the min cost of the the we bought 
    then we will sort the price from the highest to lowest, every third pair would be cheaper than the previous two, that can be free
    */
    
    let output = 0
    let count = 0 
    
    cost = cost.sort((a,b)=> b-a)
    
    for (let i = 0; i < cost.length; i++) {
        if (count >= 2) count = 0
        else {
            output += cost[i]
            count++
        }
    }
    
    return output
};