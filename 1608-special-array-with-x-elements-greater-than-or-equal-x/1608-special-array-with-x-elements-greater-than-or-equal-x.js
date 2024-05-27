/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    
    nums.sort((a,b)=> a-b)
    
    let output = -1;
    
    for (let i = 0; i <= nums.length; i++) {
        let targetNum = nums.find(ele => ele >= i)
        let qualifiedNum = targetNum === undefined ? 0 : nums.length - nums.indexOf(targetNum);
        // console.log(nums, targetNum, qualifiedNum)
        if (qualifiedNum === i) {
            output = i;
            break;
        } 
    }
    
    return output
    
};