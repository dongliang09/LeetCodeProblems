/**
 * @param {string} password
 * @return {number}
 */
var passwordStrength = function(password) {
    
    /**
        In ASCII table 
        A-Z is 65 - 90
        a-z is 97 - 122
        0-9 is 48 - 57
        !@#$ is 33, 64, 35, 36
     */
    let lowercase = new Set()
    let uppercase = new Set()
    let digit = new Set()
    let special = new Set()

    for (let i = 0; i < password.length; i++) {
        let curr = password.charCodeAt(i)
        if ( 65 <= curr && curr <= 90) {
            uppercase.add(curr)
        } else if (97 <= curr && curr <= 122) {
            lowercase.add(curr)
        } else if (48 <= curr && curr <= 57) {
            digit.add(curr)
        } else {
            special.add(curr)
        }
    }

    return lowercase.size + uppercase.size * 2 + digit.size * 3 + special.size * 5
};