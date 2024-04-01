/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    
    // zero -- special "z" //
    // one -- tertiary 'o' //
    // two -- special "w" //
    // three -- secondary 'h' //
    // four -- special 'u' //
    // five -- secondary 'v' 'f' //
    // six  -- special 'x' //
    // seven -- secondary 'v' 's' //
    // eight -- special 'g' //
    // nine
    
    // count freq of letters 
    
    let freqObj = {};
    let numArr = [];
    
    //count frequency
    for (let i = 0; i < s.length; i++) {
        let currLetter = s[i];
        if (currLetter in freqObj) freqObj[currLetter]++;
        else freqObj[currLetter] = 1;
    }
    
    //----------- remove all the unique letters -----
    
    // remove count of 0
    if ("z" in freqObj) {
        let freqZero = freqObj["z"];
        numArr = numArr.concat(new Array(freqZero).fill(0));
        freqObj["z"] -= freqZero;
        freqObj["e"] -= freqZero;
        freqObj["r"] -= freqZero;
        freqObj["o"] -= freqZero;
    }
    
    // remove count of 2
    if ("w" in freqObj) {
        let freqTwo = freqObj["w"];
        numArr = numArr.concat(new Array(freqTwo).fill(2));
        freqObj["t"] -= freqTwo;
        freqObj["w"] -= freqTwo;
        freqObj["o"] -= freqTwo;
    }
    
    // remove count of 4
    if ("u" in freqObj) {
        let freqFour = freqObj["u"];
        numArr = numArr.concat(new Array(freqFour).fill(4));
        freqObj["f"] -= freqFour;
        freqObj["o"] -= freqFour;
        freqObj["u"] -= freqFour;
        freqObj["r"] -= freqFour;
    }
    
    // remove count of 6
    if ("x" in freqObj) {
        let freqSix = freqObj["x"];
        numArr = numArr.concat(new Array(freqSix).fill(6));
        freqObj["s"] -= freqSix;
        freqObj["i"] -= freqSix;
        freqObj["x"] -= freqSix;
    }
    
    // remove count of 8
    if ("g" in freqObj) {
        let freqEight = freqObj["g"];
        numArr = numArr.concat(new Array(freqEight).fill(8));
        freqObj["e"] -= freqEight;
        freqObj["i"] -= freqEight;
        freqObj["g"] -= freqEight;
        freqObj["h"] -= freqEight;
        freqObj["t"] -= freqEight;
    }
    
    //----------- remove all the secondary letters -----
    
    // remove count of 3
    if ("h" in freqObj && freqObj["h"] !== 0) {
        let freqThree = freqObj["h"];
        numArr = numArr.concat(new Array(freqThree).fill(3));
        freqObj["t"] -= freqThree;
        freqObj["h"] -= freqThree;
        freqObj["r"] -= freqThree;
        freqObj["e"] -= freqThree;
        freqObj["e"] -= freqThree;
    }
    
    // remove count of 5
    if ("f" in freqObj && freqObj["f"] !== 0) {
        let freqFive = freqObj["f"];
        numArr = numArr.concat(new Array(freqFive).fill(5));
        freqObj["f"] -= freqFive;
        freqObj["i"] -= freqFive;
        freqObj["v"] -= freqFive;
        freqObj["e"] -= freqFive;
    }
    
    // remove count of 7
    if ("s" in freqObj && freqObj["s"] !== 0) {
        let freqSeven = freqObj["s"];
        numArr = numArr.concat(new Array(freqSeven).fill(7));
        freqObj["s"] -= freqSeven;
        freqObj["e"] -= freqSeven;
        freqObj["v"] -= freqSeven;
        freqObj["e"] -= freqSeven;
        freqObj["n"] -= freqSeven;
    }
    
    //----------- remove all the tertiary letters -----
    
    // remove count of 1
    if ("o" in freqObj && freqObj["o"] !== 0) {
        let freqOne = freqObj["o"];
        numArr = numArr.concat(new Array(freqOne).fill(1));
        freqObj["o"] -= freqOne;
        freqObj["n"] -= freqOne;
        freqObj["e"] -= freqOne;
    }
    
    // remove count of 9
    if ("e" in freqObj && freqObj["e"] !== 0) {
        let freqNine = freqObj["e"];
        numArr = numArr.concat(new Array(freqNine).fill(9));
        freqObj["n"] -= freqNine;
        freqObj["i"] -= freqNine;
        freqObj["n"] -= freqNine;
        freqObj["e"] -= freqNine;
    }
    
    return numArr.sort((a,b)=>a-b).join('')
    
    
};

/*
Date: 4/1/2024
Rank: 111,229
Runtime: 82 ms, faster than 64.29% 
Memory Usage: 56.2 MB, less than 67.86%

============ test case ======
"nnei"

*/