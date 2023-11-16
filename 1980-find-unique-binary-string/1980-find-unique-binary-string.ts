function findDifferentBinaryString(nums: string[]): string {
    
    let max = Math.pow(2, nums[0].length);
    let n = nums[0].length;
    
    // console.log(max);
    
    for ( let i = 0; i < max; i++) {
        let binary : string = i.toString(2);
        let binaryWithLeadZero= binary.padStart(n, '0');
        if (nums.indexOf(binaryWithLeadZero) === -1) {
            return binaryWithLeadZero;
        }
    }
    
    return "00"
    
};