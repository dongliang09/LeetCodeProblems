/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let output = 0
    let v1Arr = version1.split(".");
    let v2Arr = version2.split(".");
    let v1NonZeroIdx = []
    let v2NonZeroIdx = []

    // only filter out non-zero number in version number
    for (let i = 0 ; i < v1Arr.length; i++) {
        if (parseInt(v1Arr[i]) !== 0) v1NonZeroIdx.push(i)
    }
    for (let i = 0 ; i < v2Arr.length; i++) {
        if (parseInt(v2Arr[i]) !== 0) v2NonZeroIdx.push(i)
    }

    //check most significant digit for version
    if (v1NonZeroIdx[0] < v2NonZeroIdx[0]) return 1
    if (v1NonZeroIdx[0] > v2NonZeroIdx[0]) return -1
    

    let longerLength = v1NonZeroIdx.length > v2NonZeroIdx.length ? v1NonZeroIdx.length : v2NonZeroIdx.length;

    //compare each non-zero version
    for (let i = 0; i < longerLength; i++) {

        //index number should be the same, otherwise, it means one is smaller than another
        if (v1NonZeroIdx[i] !== v2NonZeroIdx[i]) {
            if (v1NonZeroIdx[i] < v2NonZeroIdx[i]) return 1
            if (v1NonZeroIdx[i] > v2NonZeroIdx[i]) return -1
        }

        // do normal comparsion
        let v1Curr = parseInt(v1Arr[v1NonZeroIdx[i]]);
        let v2Curr = parseInt(v2Arr[v2NonZeroIdx[i]]);

        if (isNaN(v1Curr)) {
            output = -1;
            break;
        }  
        if (isNaN(v2Curr)) {
            output = 1;
            break;
        }  

        if (v1Curr > v2Curr) {
            output = 1;
            break;
        } else if (v1Curr < v2Curr) {
            output = -1;
            break;
        }
    }

    return output

    
};

/**
DateL 9/23/2025
========================= First try ====================
fail: not proper set end loop condition

    let output = 0
    let v1Arr = version1.split(".");
    let v2Arr = version2.split(".");
    let v1Pointer = 0;
    let v2Pointer = 0;
    let NotEnd = true;

    let longerLength = v1Arr.length > v2Arr.length ? v1Arr.length : v2Arr.length;

    for (let i = 0; NotEnd; i++) {
        let v1Curr = parseInt(v1Arr[v1Pointer]);
        let v2Curr = parseInt(v2Arr[v2Pointer]);

        if (isNaN(v1Curr) && isNaN(v2Curr)) {
            break;
        } 

        while (v1Curr === 0) {
            v1Curr = parseInt(v1Arr[v1Pointer++]);
        }

        while (v2Curr === 0) {
            v2Curr = parseInt(v2Arr[v2Pointer++]);
        }

        console.log(output, v1Curr, v2Curr)
        if (isNaN(v1Curr)) {
            output = -1;
            break;
        }  
        if (isNaN(v2Curr)) {
            output = 1;
            break;
        }  
        
        if (v1Curr > v2Curr) {
            output = 1;
            break;
        } else if (v1Curr < v2Curr) {
            output = -1;
            break;
        }

        v1Pointer++
        v2Pointer++
    }

    return output
 */