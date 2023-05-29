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
    }
    
    if (carType === 2) {
        if (this.currentMedium < this.medium) {
            this.currentMedium++
        } else {
            return false
        }
    }
    
    if (carType === 3) {
        if (this.currentSmall < this.small) {
            this.currentSmall++
        } else {
            return false
        }
    }
    return true
    
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */