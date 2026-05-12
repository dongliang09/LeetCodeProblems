/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function(tasks) {

    /**
    add all the actual energy, and compare to the max requited energy
    take the bigger one as the potential output

    then we need to perform a check

    sort by difference of energy by descending order 
    because bigger the difference require higher bar to complete

    group the tasks with the same difference and sort them by required energy with descending order
    concatance all the tasks

    after the sort, compare to the required, 
    if it satisfy, subtract the actual,
    else add the diff (we will add back to output later)

     */

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

    let needMoreEnergy = 0
    let checkEnergy = max > energy ? max : energy
    let output = checkEnergy

    for (let i = 0 ; i < sortArr.length; i++) {
        let [actual, required] = sortArr[i]
        if (checkEnergy < required) {
            let diff = required - checkEnergy
            needMoreEnergy += diff
            checkEnergy += diff
        }
        checkEnergy -= actual
    }

    output += needMoreEnergy

    return output

};