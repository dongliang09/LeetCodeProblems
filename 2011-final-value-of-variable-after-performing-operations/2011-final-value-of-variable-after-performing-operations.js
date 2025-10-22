/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {

    let output = 0;

    for (let i = 0; i < operations.length; i++) {
        let curr = operations[i];
        switch (curr) {
            case '--X':
            case 'X--': {
                output--;
                break;
            }
            case '++X': 
            case 'X++': {
                output++;;
                break;
            }
        }
    }

    return output
    
};

/**
Date: 10/21/2025
Runtime: 1ms, beats 100%
Memory: 54.97MB, beats 83.47%
 */