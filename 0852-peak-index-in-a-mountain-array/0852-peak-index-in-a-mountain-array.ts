function peakIndexInMountainArray(arr: number[]): number {
    
    // ============ idea ===========
    // since the array is guaranteed to be a mountain array, 
    // we just need to the the one where mountain[i] > mountain[i+1], where it starts to going downward
    
    // ============ code ===========
    let output = 0
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            return i
        }
    }
    
    return output
};

/*

# Rank 126,722
# Date 07/24/2023
# Runtime: 78 ms, faster than 69.81%
# Memory Usage:  52.6 MB, less than 58.49% 
*/