/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    
    // ============ helper function ===========
    function Dijkstra (map, start, distanceThreshold) {
        // input: graph map, starting node
        // output: object of cities, with values of distance to each city
        
        /*logic: 
        ------------ set up -------------
        (1) each node starts with distance of infinity except the starting node with distance 0 (distance will be used to compare)
        (2) we need to track visited nodes and unvisted nodes (visited node is defined as we calculated distance from current node)
        -------------- process -----------
        (3) each time we pick the smallest distance from the reached (but not visited) nodes, find the the distance to unvisited nodes, compare the distance they have, replace it if it is smaller (as the distance in step 1)
        (4) repeat step 3 until we have visited all the node
        */
        
        let visited = new Set();
        let unvisited = new Set();
        let table = {};
        let reached = [start];
        
        let numCities = 0;
        
        for (const key of Object.keys(map))  {
            unvisited.add(key)
            if (table[key] === undefined) {
                table[key] = Infinity;
            }
        }
        
        table[start] = 0
        
        // console.log("initial table", table)
        
        while (reached.length !== 0) {
            
            // use the smallest distance to start as current node (which is sorted at the end of loop)
            
            let curr = reached.shift();
            visited.add(curr)

            // for each neighbor
            // check the distance from current node to neighbor node
            // if the new distance is less than the distance in the table, update it
            
            let neighbors = Object.keys(map[curr])
            
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    let currToNeighborDistance = map[curr][neighbor];
                    let newDistance = table[curr] + currToNeighborDistance;
                    if (newDistance < table[neighbor]) {
                        table[neighbor] = newDistance
                    }
                    if (reached.indexOf(neighbor) === -1) reached.push(neighbor)
                }
            }
            
            // sort the array, so we can always find the smallest distance as the first one for the next loop
            reached.sort((a,b)=>table[a]-table[b])
            
        }
        
        // console.log("after", table)
        
        for (const city of Object.keys(table)) {
            if (table[city] <= distanceThreshold) numCities++;
        }
        
        return numCities - 1
        
    }
    
    // ============ main function ===========
    let graphObj = {}
    let cityCountObj = {}
    
    for (let i = 0; i < edges.length; i++) {
        let [source, dest, distance] = edges[i];
        if (graphObj[source] === undefined) {
            graphObj[source] = {}
        }
        graphObj[source][dest] = distance
        
        if (graphObj[dest] === undefined) {
            graphObj[dest] = {}
        }
        graphObj[dest][source] = distance
        
        if (cityCountObj[source] === undefined) {
            cityCountObj[source] = 0
        }
        if (cityCountObj[dest] === undefined) {
            cityCountObj[dest] = 0
        }
        
    }
    
    //edge case where the city is not in the edge list
    if (Object.keys(cityCountObj).length !== n) {
        for (let i = 0; i < n; i++) {
            if (cityCountObj[i] === undefined) return i
        }
    }
    
    
    for (const city of Object.keys(cityCountObj)) {
        cityCountObj[city] = Dijkstra(graphObj, city, distanceThreshold)
    }
    
    console.log(cityCountObj)
    let cityDistanceArr = Object.values(cityCountObj).sort((a,b)=>a-b)
    let leastNumber = cityDistanceArr[0]
    
    let qualifiedCities = []
    for (const city of Object.keys(cityCountObj)) {
        if (cityCountObj[city] === leastNumber) qualifiedCities.push(city)
    }
    
    console.log(qualifiedCities)
    
    if (qualifiedCities.length !== 1) {
        qualifiedCities.sort((a,b)=>Number(b)-Number(a))  
    } 
    return Number(qualifiedCities[0])
    
    
    
    
    
};



/*
=========== test case =============
6
[[0,3,7],[2,4,1],[0,1,5],[2,3,10],[1,3,6],[1,2,1]]
417

*/