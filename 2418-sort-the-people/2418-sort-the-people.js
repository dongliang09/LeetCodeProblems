/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    
    //since only heights are distinct, but not names
    
    let finalArr = [];
    
    //use obj to make heights-names as key-value pair
    let obj = {};
    for ( let i = 0; i < names.length; i++) {
        obj[heights[i]] = names[i];
    }
    
    //sort heights
    heights.sort((a,b) => {
        return b-a
    })
    
    //console.log(obj, heights)
    for ( let i = 0; i < names.length; i++) {
        finalArr.push(obj[heights[i]])
    }
    
    return finalArr;
};

/*
Rank 263,263
Runtime: 106 ms, faster than 83.16%
Memory Usage: 46.8 MB, less than 72.19%
*/