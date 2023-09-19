function findDuplicate(nums: number[]): number {
    
    let output = nums[0];
    let isFound = false;
    
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] === currentNum) {
                output = currentNum;
                isFound = true;
                break;
            } 
        }  
        if(isFound) break;
    }

    return output;
};