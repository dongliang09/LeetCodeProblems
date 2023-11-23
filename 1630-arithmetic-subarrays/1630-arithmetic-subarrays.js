/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    
    let diff = 0;
    let output = [];
    let isCurrTrue = true;
    
    for (let i = 0; i < l.length; i++) {
        isCurrTrue = true;
        
        //get each array
        let current = nums.slice(l[i], r[i]+ 1);
        current.sort((a,b)=>(a-b));
        
        //check each difference
        diff = current[1] - current[0];
        for (let j = 1; j < current.length; j++) {
            let newDiff = current[j] - current[j-1];
            if (newDiff != diff) {
                output.push(false);
                isCurrTrue = false;
                break;
            };
        }
        if (isCurrTrue) output.push(true);
    }
    
    return output;
    
};