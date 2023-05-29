/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.big = big
    this.medium = medium
    this.small = small
    this.currentBig = 0
    this.currentMedium = 0
    this.currentSmall = 0
    
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if (carType === 1) {
        if (this.currentBig < this.big) {
            this.currentBig++
        } else {
            return false
        }
    } else if (carType === 2) {
        if (this.currentMedium < this.medium) {
            this.currentMedium++
        } else {
            return false
        }
    } else {
        if (this.currentSmall < this.small) {
            this.currentSmall++
        } else {
            return false
        }
    }
    return true
    
};

/** 

# Rank 167,933
# Date 5/28/2023
# Runtime: 154 ms, faster than 5.39% 
# Memory Usage: 49.9 MB, less than 56.29%

============================================
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */