/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    
    let vowelCount = {'a':0, 'e':0, 'i':0, 'o':0, 'u':0};
    let consoCount = {'b':0, 'c':0, 'd':0, 'f':0, 'g':0,
                      'h':0, 'j':0, 'k':0, 'l':0, 'm':0,
                      'n':0, 'p':0, 'q':0, 'r':0, 's':0,
                      't':0, 'v':0, 'w':0, 'x':0, 'y':0, 'z': 0};
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if ('aeiou'.indexOf(curr) !== -1) vowelCount[curr]++;
        else consoCount[curr]++;
    }

    result = Math.max(...Object.values(vowelCount)) + Math.max(...Object.values(consoCount));

    return result

};

/**
Date: 09/12/2025 
Runtime: 2ms Beats 97.21% 
Memory: 54.03MB Beats 100.00%
*/