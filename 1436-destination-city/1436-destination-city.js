/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    
    //if there is only one city is the destination city, 
    //it will not have a path to be the first one in any pair
    
    // idea 2, find the difference of two sets 
    let startCity = new Set();
    let endCity = new Set();
    
    for (let i = 0; i < paths.length; i++) {
        startCity.add(paths[i][0]);
        endCity.add(paths[i][1]);
    }
    
    let startCityArr = [...startCity];
    let endCityArr = [...endCity];

    let diff = endCityArr.filter(x => !startCityArr.includes(x));
    
    return diff[0]
};


/*
====================idea 1 =============================
    //keep doing find one until we can't get null, then that is the destination
    let startCity = paths[0][1];
    let isCityFound = false;
    
    while (!isCityFound) {
        startCity = paths.find(())
    }

*/