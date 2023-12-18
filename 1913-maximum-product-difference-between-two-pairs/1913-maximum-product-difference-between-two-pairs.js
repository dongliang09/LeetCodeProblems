/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    
    let first4Arr = nums.slice(0,4).sort((a,b)=>a-b);
    let firstMax = first4Arr[3];
    let secondMax = first4Arr[2];
    let firstMin = first4Arr[0];
    let secondMin = first4Arr[1];
    let output;
    
    for (let i = 4; i < nums.length; i++) {
        let curr = nums[i];
        if (curr > firstMax) {
            secondMax = firstMax;
            firstMax = curr;
        } else if (curr > secondMax ) {
            secondMax = curr;
        }
        
        if (curr < firstMin) {
            secondMin = firstMin;
            firstMin = curr;
        } else if (curr < secondMin ) {
            secondMin = curr;
        }
        
        
    }
    
    output = firstMax * secondMax - firstMin * secondMin;
    return output
    
};