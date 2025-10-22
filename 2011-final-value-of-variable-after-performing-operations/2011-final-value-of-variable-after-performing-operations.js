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