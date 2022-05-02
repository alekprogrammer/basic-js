const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    constructor() {
        this.deep = 1;
        this.deepest = 1;
    }
    calculateDepth(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (JSON.stringify(arr[i]) === "[]") {
                this.deep++;
                if (this.deep > this.deepest) {
                    this.deepest = this.deep;
                }
                this.deep--;
            } else if (!Array.isArray(arr[i])) {
                if (this.deep > this.deepest) {
                    this.deepest = this.deep;
                }
            } else {
                this.deep++;
                this.calculateDepth(arr[i]);
                this.deep--;
            }
        }
        return this.deepest;
    }
}

module.exports = {
    DepthCalculator
};