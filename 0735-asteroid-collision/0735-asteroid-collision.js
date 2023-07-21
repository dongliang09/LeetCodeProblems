/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    
    let output = []
    // let isAsteroidComing = false // false means it just exploded, and none is coming, true means some are moving to right
    
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

================== first try ==============
 should consider overall direction of explosion
 
    let output = []
    let index = 0
    
    let stack = []
    
    while (index < asteroids.length) {
        
        let current = asteroids[index]
        if (current > 0) {
            stack.push(current)
            
        } else {
            
            let isNotExploded = true
            while(isNotExploded) {

                if ( stack.length === 0 ) {
                    output.push(current)
                    break
                }
                
                let lastAsteroid = stack[stack.length - 1]
                // if current is equal to last asteroid in size, it exploded
                // if current is greater than last asteroid in size, last asteroid pops
                // if current is smaller than last asteroid in size, current is exploded
                
                if ( Math.abs(current) < lastAsteroid ) {
                    
                } else if ( Math.abs(current) === lastAsteroid ) {
                    stack.pop()
                    isNotExploded = false
                } else if ( Math.abs(current) > lastAsteroid ) isNotExploded = false
            }
                
            
        }
        
        index++
    }
    
    return output


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