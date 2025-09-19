/**
 * @param {number} rows
 */
var Spreadsheet = function(rows) {
    this.excelCell = {}
};

/** 
 * @param {string} cell 
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function(cell, value) {
    this.excelCell[cell] = value
};

/** 
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function(cell) {
    this.excelCell[cell] = 0
};

/** 
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function(formula) {
    let actualFormula = formula.split("=")[1];
    let valueArr = actualFormula.split("+");
    let num1 = parseInt(valueArr[0])
    let num2 = parseInt(valueArr[1])

    if (isNaN(num1)) {
        num1 = this.excelCell[valueArr[0]] !== undefined ? this.excelCell[valueArr[0]] : 0;
    }
    if (isNaN(num2)) {
        num2 = this.excelCell[valueArr[1]] !== undefined ? this.excelCell[valueArr[1]] : 0;
    }
    return num1 + num2
};

/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */

 /**
 Date: 09/18/2025
 Runtime: 97ms beats 61.11%
 Memory: 79MB beats 27.78%
  */