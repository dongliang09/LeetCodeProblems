/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    
    let freq = {};
    let arr = nums;
    for ( let i = 0; i < arr.length; i++) {
        if (freq[arr[i]] !== undefined) {
          freq[arr[i]]++;
        } else {
          freq[arr[i]] = 1;
        }
    }
  // console.log(freq);
  // console.log(freq['1']);
  let freqArr = Object.entries(freq);

  //console.log(freqArr)
  freqArr.sort((a,b) => {
    // if (a is less than b ) return -1;
    // if (a is greater than b ) return 1;
    // // a must be equal to b => return 0;

    // sort frequence of freqArr if one is greater than another
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;

    // sort key of freqArr if they have the same frequence
    if (a[1] === b[1]) {

      //because we want decreasing order, we flip the 1 and -1
      if (Number(a[0]) < Number(b[0])) return 1;
      if (Number(a[0]) > Number(b[0])) return -1;
    }
    //return a[1] - b[1];
  })
  // console.log("freqArr", freqArr)

  let newArr= [];
  for (let i = 0; i < freqArr.length; i++) {

    for (let j = 0; j < freqArr[i][1]; j++){
      newArr.push(Number(freqArr[i][0]));
    }

  }
  // console.log("newArr", newArr)
  return newArr;
};

/*
Rank 263,263
Runtime: 133 ms, faster than 42.47%
Memory Usage: 44.3 MB, less than 73.49%
*/

