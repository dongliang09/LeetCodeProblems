/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function(tasks) {

    // tasks = tasks.sort((a,b)=> (b[1]-b[0]) - (a[1]-a[0]))
    // console.log(tasks)

    let energy = 0
    let max = 0
    let dataObj = {}

    for (let i = 0; i < tasks.length; i++) {
        let curr = tasks[i]
        let diff = curr[1] - curr[0]

        if (dataObj[diff] === undefined) dataObj[diff] = [curr]
        else dataObj[diff].push(curr)

        energy += curr[0]
        if (curr[1] > max) max = curr[1]
    }

    let keyArr = Object.keys(dataObj).sort((a,b)=>Number(b)-Number(a))

    let sortArr = []
    for (let i = 0; i < keyArr.length; i++) {
        let currKey = keyArr[i]
        dataObj[currKey] = dataObj[currKey].sort((a,b) => b[1] - a[1])
        sortArr = [...sortArr, ...dataObj[currKey]]
    }

    let notEnough = 0
    let checkEnergy = max > energy ? max : energy
    let output = checkEnergy

    for (let i = 0 ; i < sortArr.length; i++) {
        let [actual, required] = sortArr[i]
        if (checkEnergy < required) {
            let diff = required - checkEnergy
            notEnough += diff
            checkEnergy += diff
        }
        checkEnergy -= actual
    }

    output += notEnough

    return output

};