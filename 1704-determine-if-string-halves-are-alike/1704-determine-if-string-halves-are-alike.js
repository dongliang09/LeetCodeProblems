/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    
    let vowel = "aeiouAEIOU";
    let midIndex = s.length / 2;
    let firstHalf = s.substring(0,midIndex);
    let secondHalf = s.substring(midIndex);
    
    // console.log(firstHalf, secondHalf)
    let vowelCount1 = 0, vowelCount2 = 0;
    
    for (let i = 0; i < firstHalf.length; i++) {
        if (vowel.includes(firstHalf[i])) vowelCount1++;
    }
    
    for (let i = 0; i < secondHalf.length; i++) {
        if (vowel.indexOf(secondHalf[i]) !== -1) vowelCount2++;
    }
    
    if(vowelCount1 === vowelCount2) return true
    return false;
};

/*
Rank 264,740
Runtime: 103 ms, faster than 60.55%
Memory Usage: 42.9 MB, less than 66.41%
*/