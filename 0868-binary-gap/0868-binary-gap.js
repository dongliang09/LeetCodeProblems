/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {

    let output = 0;
    let startPosition = -1;
    let str = n.toString(2);

    for (let i = 0; i < str.length; i++) {
        let curr = str[i]
        if (curr === '1') {
            if (startPosition === -1) startPosition = i;
            else {
                let dist = i - startPosition;
                if (dist > output) output = dist
                startPosition = i; // update pointer
            }
        } 
    }

    return output
};