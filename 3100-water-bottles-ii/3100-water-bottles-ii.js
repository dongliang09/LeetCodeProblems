/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    let output = numBottles;
    let empty = numBottles;
    let leftover = 0

    while (empty >= numExchange) {
        let exchange = 0
        while (empty >= numExchange) {
            empty -= numExchange;
            numExchange++;
            exchange++
        }
        empty += exchange
        output += exchange
    }

    return output
};

/**
Date: 10/1/2025
 */