function isGood(nums: number[]): boolean {

    const countObj = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= nums.length) return false
        if (nums[i] in countObj) {
            if (nums[i] in countObj && nums[i] !== nums.length - 1) return false
            if (countObj[nums[i]] === 1) countObj[nums[i]]++
            else return false
        }
        
        else countObj[nums[i]] = 1
    }
    
    return true
};