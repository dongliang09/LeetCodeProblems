/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {

    
    // ================= idea ================
    // asteroids collide when there is a asteroid moving to positive direction and another moving to negative direction
    // when we have negative asteroids only, no matter what directions of asteroids afterward, they won't collide
    // so that we only need to have a queue/stack of positive asteroids.
    
    // we will loop through each asteroids, when it is positive, push to stack
    // when it is negative, we will have while loop to see if current asteroid will make stack' asteroid explode or not
    
    // ================= code ================
    let output = []
  
    let index = 0
    let stack = []
    
    while (index <  asteroids.length) {
        let current = asteroids[index]
        
        if ( current > 0 ) {
            stack.push(current)
        } else {
            
            let currentInSize = Math.abs(current)
            let isExploded = false
            
            while(!isExploded) {

                if ( stack.length === 0 ) {
                    output.push(current)
                    break
                }
                
                let lastAsteroid = stack[stack.length - 1]
                if (currentInSize < lastAsteroid) {
                    isExploded = true
                } else if (currentInSize > lastAsteroid) {
                    stack.pop()
                    if (stack.length === 0) {
                        output.push(current)
                        break
                    }
                } else {
                    stack.pop()
                    isExploded = true
                }

            }
            
        }
        
        index++
    }
    
    output.push(...stack)
    
    return output
    
};

/*

# Rank 126,702
# Date 07/20/2023
# Runtime: 81 ms, faster than 22.10%
# Memory Usage: 43.8 MB, less than 75.61%


=========== test case ======

[3,-7,12,-12,34,-56,21,-54,65]
=> [-7,-56,-54,65]

[3,7,12,12,34,-56,-21,-54,-65]
=> [-56,-21,-54,-65]

[3,7,12,12,-34,-56,-21,-54,65]
=> [-34,-56,-21,-54,65]

[3,-7,12,-12,34,-6,-21,-5,65]
=> [-7,34,65]

*/