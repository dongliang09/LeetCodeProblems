/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    
    let trustObj = {}
    let trusted = new Set();

    if (n === 1 && trust.length === 0) return 1

    // count all the trusted people
    // also a set to store list of people who trust others
    trust.forEach(element => {
        trusted.add(element[0]);
        let index = element[1].toString();
        trustObj[index] === undefined ? trustObj[index] = 1 : trustObj[index]++;
    })

    let objKey = Object.keys(trustObj)
    let objVal = Object.values(trustObj)

    let trustedArr = [...trusted];

    let indexFound = objVal.indexOf(n- 1);
    
    // judge can't trust anyone and need to have all the trust from other people
    if (indexFound !== -1) {
        if (!trustedArr.includes(Number(objKey[indexFound]))) {
            return Number(objKey[indexFound])
        }
    }

    return -1
};


/*
Rank 239,447
Runtime: 130 ms, faster than 49.90%
Memory Usage: 50.6 MB, less than 67.55%
*/
