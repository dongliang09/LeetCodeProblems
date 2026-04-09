/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function(width, height) {
    this.direction = "East";
    this.posX = 0;
    this.posY = 0;
    this.gridWidth = width - 1;
    this.gridHeight = height - 1;
    this.parameter = (width + height) * 2
};

/** 
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function(num) {
    num = num % (this.parameter - 4);
    if (num === 0) num = this.parameter - 4; // extra loop if it is 0

    for (let i = num; i > 0; i--) {
        let x = this.posX, y = this.posY
        if (this.direction === 'North') {
            if (y < this.gridHeight) this.posY = y + 1;
            else {
                this.direction = 'West';
                this.posX = x - 1;
            }
        } else if (this.direction === 'East') {
            if (x < this.gridWidth) this.posX = x + 1;
            else {
                this.direction = 'North';
                this.posY = y + 1;
            }
        } else if (this.direction === 'South') {
            if (y > 0) this.posY = y - 1;
            else {
                this.direction = 'East';
                this.posX = x + 1;
            }
        } else {
            if (x > 0) this.posX = x - 1;
            else {
                this.direction = 'South';
                this.posY = y - 1;
            }
        }
    }
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function() {
    return [this.posX, this.posY]
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function() {
    return this.direction
};

/** 
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */