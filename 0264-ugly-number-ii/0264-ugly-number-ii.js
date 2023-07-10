/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    
    let arr = [1];
    let currentLow = 1;
    let indexpoint = 0;
    
    if (n === 1) return 1;
    
    while (indexpoint !== n) {
        //multiply by the lowest number (the one we haven't use) by 2, by 3, by 5
        arr.push(arr[indexpoint] *2, arr[indexpoint] *3, arr[indexpoint] *5);
        
        //sort them and remove duplicates
        arr.sort((a,b) => a - b);
        let abc = new Set(arr);
        arr = [...abc]
        
        // when the indexpoint === n, which mean we are pointing to the nth lowest number
        // return the number at that index
        // do know we are inside the loop with condition indexpoint !== n
        // this is the safty guard
        if (indexpoint === n) {
            // console.log(arr.slice[indexpoint-2])
            return currentLow;
        }
        
        indexpoint = arr.indexOf(currentLow) + 1;
        currentLow = arr[indexpoint];
        
    }
    
    return arr[n - 1];

    
};


/*
Rank 319,102
Runtime: 10504 ms, faster than 5.49%
Memory Usage: 71.6 MB, less than 5.49%

mostly time limit exceed

================first try============
    let arr = [];   
    let number = 1
    //=============helper function=======
    const isUgly = (n) => {
        if (n < 1) return false

        while ( n >= 1) {
            if ( n === 1 ) return true
            if ( (n % 2 !== 0) && (n % 3 !== 0) && (n % 5 !== 0)) return false;
            if( n % 2 === 0 ) {
                n /= 2;
            }
            if (n % 3 === 0) {
                n /= 3;
            }
            if (n % 5 === 0) {
                n /= 5;
            }
        }
        return true
    };
    //====================
    while (arr.length < n) {
        if (isUgly(number)) {
            arr.push(number);
        }
        number++;
    }
    
    return arr[n-1];
*/