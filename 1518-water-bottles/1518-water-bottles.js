/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {

    let output = numBottles;
    let empty = numBottles;
    let leftover = 0

    while (empty >= numExchange) {
        let exchange =  Math.floor(empty / numExchange)
        leftover = empty - exchange * numExchange
        empty = leftover + exchange
        output += exchange
    }

    return output
};

/**
Date: 9/30/2025
 */