function sumIndicesWithKSetBits(nums: number[], k: number): number {
    
    let output = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let currBinary = i.toString(2);
        let count = 0;
        for (let j = 0; j < currBinary.length; j++) {
            if (currBinary[j] === "1") count++;
        }
        if (count === k) output += nums[i];
    }
        
    return output
};