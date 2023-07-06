/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    
    let output = 0
    
    for (let a = 1; a <= n; a++) {
        
        for (let b = 1; b <= n; b++) {
            
            for (let c = 1; c <= n; c++) {
                if (a**2 + b**2 === c**2) output++
            }
        }
    }

    return output
    
};

/*

# Rank 130,529
# Date 07/06/2023
# Runtime: 628 ms, faster than 7.81%
# Memory Usage: 44 MB, less than 15.38%
*/