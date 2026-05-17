/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {

    /**
        we use DFS to search, and a set to keep track of index
        if we have visited a index, skip it, else, push into the stack to search later
     */
     
    let visited = new Set()

    let stack = [start]

    while (stack.length) {
        let curr = stack.pop()

        if (arr[curr] === 0) return true
        visited.add(curr)

        let jumpNeighbor = []
        if (arr[curr] !== undefined) {
            if (curr + arr[curr] < arr.length) jumpNeighbor.push(curr + arr[curr])
            if (curr - arr[curr] >= 0 ) jumpNeighbor.push(curr - arr[curr])
        }
        

        jumpNeighbor.forEach((element)=>{
            if (!visited.has(element)) stack.push(element)
        })

    }

    return false
    
};