function peakIndexInMountainArray(arr: number[]): number {
    let output = 0
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            return i
        }
    }
    
    return output
};