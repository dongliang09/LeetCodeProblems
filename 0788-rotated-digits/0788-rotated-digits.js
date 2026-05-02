/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {

    let output = 0;

    for (let i = 1; i <= n; i++) {
        let currNum = i.toString();
        if (currNum.indexOf("3") === -1 && currNum.indexOf("4") === -1 && currNum.indexOf("7") === -1) {
            let newNum = "";
            for (let j = 0; j < currNum.length; j++) {
                let currDigit = currNum[j];
                if (currDigit === "0" || currDigit === "1" || currDigit === "8") newNum += currDigit
                else if (currDigit === "2") newNum += "5"
                else if (currDigit === "5") newNum += "2"
                else if (currDigit === "6") newNum += "9"
                else if (currDigit === "59") newNum += "6"
            }
            if (newNum !== currNum) output++
        }
    }

    return output
    
};