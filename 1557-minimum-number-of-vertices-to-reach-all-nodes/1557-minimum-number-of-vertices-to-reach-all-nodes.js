/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    
    //store each head and tail
    let heads = new Set();
    let tails = new Set();
    
    for (let i = 0; i < edges.length; i++) {
        heads.add(edges[i][0])
        tails.add(edges[i][1])
    }
      
    //only wants the difference of heads and tails from heads
    let difference = new Set(heads)
    for (const elem of tails) {
        difference.delete(elem);
    }
    
    return [...difference]
};


/*
============test case ==============

5
[[1,3],[2,0],[2,3],[1,0],[4,1],[0,3]]
*/