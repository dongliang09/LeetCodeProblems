/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    
    let timeArr = [];
    let output = Infinity;
    
    for (let i = 0 ; i < timePoints.length; i++) {
        let curr = timePoints[i];
        let minutes = Number(curr.slice(0,2)) * 60 + Number(curr.slice(3)) 
        timeArr.push(minutes)
    }
    
    timeArr.sort((a,b)=>a-b)
    
    for (let i = 1; i < timeArr.length; i++) {
        let diff = timeArr[i] - timeArr[i-1];
        if (diff < output) output = diff
    }
    
    //check for tail to head
    if (timeArr[0] + 24*60 - timeArr[timeArr.length - 1] < output) 
        output = (timeArr[0] + 24*60 - timeArr[timeArr.length - 1])
    
    return output
    
};