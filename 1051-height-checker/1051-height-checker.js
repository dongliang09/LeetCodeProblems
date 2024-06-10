/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    
    let expected = heights.slice();
    expected.sort((a,b)=>a-b)
    let output = 0;
    
    
    for (let i = 0 ; i < heights.length; i++) {
        if (expected[i] !== heights[i]) output++;
    }
    
    return output
    
};