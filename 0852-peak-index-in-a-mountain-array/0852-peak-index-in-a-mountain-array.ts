function peakIndexInMountainArray(arr: number[]): number {
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
# Runtime: 95 ms, faster than 7.55%
# Memory Usage:  52.6 MB, less than 58.49% 
*/