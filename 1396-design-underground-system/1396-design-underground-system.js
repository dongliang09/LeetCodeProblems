
var UndergroundSystem = function() {
    this.data={"checkIn":{}, "checkOut":{}, avgTime:{}}
/*   
    {
        checkIn:{
            userId: [stationName, t]
        },
        checkOut: {
            userId: [stationName, t]
        },
        avgTime: {
            stationName1ToStationName2: [time1, time2]
        } 
    }
*/
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.data.checkIn[id] = [stationName, t] 
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let [station1, t1] = this.data.checkIn[id]
    let name1ToName2 = station1 + "," + stationName
    let timeDiff = t - t1
    if (!this.data.avgTime[name1ToName2]) {
        this.data.avgTime[name1ToName2] = []
    }
    this.data.avgTime[name1ToName2].push(timeDiff)
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let name1ToName2 = startStation + "," + endStation
    let sum = 0;
    this.data.avgTime[name1ToName2].forEach(time=>sum+=time)
    return sum / this.data.avgTime[name1ToName2].length
};

/** 

============= test case ===========
["UndergroundSystem","checkIn","checkIn","checkIn","checkOut","checkOut","checkOut","getAverageTime","getAverageTime","checkIn","getAverageTime","checkOut","getAverageTime"]
[[],[45,"a",3],[32,"aa",8],[27,"a",10],[45,"ab",15],[27,"ab",20],[32,"b",22],["aa","b"],["a","ab"],[10,"a",24],["a","ab"],[10,"ab",38],["a","ab"]]

==========================
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */