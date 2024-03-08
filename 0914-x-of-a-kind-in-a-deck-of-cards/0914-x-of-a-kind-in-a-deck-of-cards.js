/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    
    let freqObj = {};
    let freqEntries = []
    let x;
    let isFreqEven = true;
    let isDivisible = true;
    
    for (let i = 0; i < deck.length; i++) {
        if (deck[i] in freqObj) freqObj[deck[i]]++;
        else freqObj[deck[i]] = 1;
    }
    
    freqEntries = Object.entries(freqObj).sort((a,b)=>a[1]-b[1]);
    
    // console.log(freqEntries, isFreqEven)
    
    x = freqEntries[0][1];
    if (x === 1) return false
    
    // if all frequency are even, return true
    for (let i = 0; i < freqEntries.length; i++) {
        if (freqEntries[i][1] % 2 !== 0) {
            isFreqEven = false;
            break;
        }
    }
    
    // console.log(isFreqEven)
    
    if (isFreqEven) return true
    
    // else if frquency is odd
    
    for (let i = 3; i <= x; i++) {
        isDivisible = true
        for ( let j = 0; j < freqEntries.length; j++) {     
            if (freqEntries[j][1] % i !== 0) {
                isDivisible = false
                break;
            }
        }
        if (isDivisible) return true
    }  
    
    

    return false
};


/*
============== test case ===========
[1]
[1,1,2,2,2,2]


when we have this many number => true [
  [ '8', 12 ],   [ '13', 12 ],
  [ '15', 20 ],  [ '14', 24 ],
  [ '17', 44 ],  [ '12', 48 ],
  [ '16', 48 ],  [ '6', 60 ],
  [ '9', 64 ],   [ '11', 96 ],
  [ '10', 116 ], [ '4', 316 ],
  [ '7', 404 ],  [ '2', 476 ],
  [ '5', 948 ],  [ '3', 1380 ],
  [ '1', 2512 ], [ '0', 3392 ]
]

[
  [ '19', 15 ],  [ '16', 25 ],
  [ '17', 40 ],  [ '18', 40 ],
  [ '14', 50 ],  [ '15', 60 ],
  [ '13', 90 ],  [ '7', 120 ],
  [ '12', 150 ], [ '9', 155 ],
  [ '0', 180 ],  [ '11', 190 ],
  [ '10', 235 ], [ '8', 275 ],
  [ '5', 385 ],  [ '3', 855 ],
  [ '2', 910 ],  [ '4', 1105 ],
  [ '6', 1230 ], [ '1', 3890 ]
] => true

*/