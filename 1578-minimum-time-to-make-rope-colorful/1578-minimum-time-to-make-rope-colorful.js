/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    
    let prevColor = colors[0];
    let countColor = 1;
    let startIndex = 0;
    let time = 0;
    
    
    //function to add the sum of time
    function findSum (startIndex, endIndex) {
        let tempSum = 0;
        let tempArray = neededTime.slice(startIndex, endIndex)
        
        //filter out the max 
        let max = Math.max(...tempArray);
        let maxIndex = tempArray.indexOf(max);

        for (let j= 0; j < tempArray.length; j++) {
            if ( j !== maxIndex) {
                tempSum += tempArray[j];
            }
            
        }
        return tempSum;     
    }
    
    for (let i = 1; i < colors.length; i++) {
        if (colors[i] !== prevColor) {
            
            //calculate the time for previous colors
            if (countColor !== 1) { 
                time += findSum(startIndex, i);
            } 
            countColor = 1;
            startIndex = i;
            
        } else {
            // find the time if we are at the end of string
            
            countColor++;
            if (countColor !== 1 && i === colors.length - 1) {
                time += findSum(startIndex, i+1);
            }
        }
        prevColor = colors[i];
        //console.log(countColor)
    }
    
    return time;
     
};



/*
Rank 398,790
Runtime: 214 ms, faster than 11.97% 
Memory Usage: 56.2 MB, less than 18.31% 

===============test case===========

"aaabbbabbbb"
[3,5,10,7,5,3,5,5,4,8,1]
"cddcdcae"
[4,8,8,4,4,5,4,2]
*/