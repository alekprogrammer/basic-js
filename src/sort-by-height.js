const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    newarr = arr.filter((elem) => elem !== -1).sort((a, b) => a - b);
    let indexs = [];
    arr.forEach((elem, index) => {
        if (elem == -1) {
            indexs.push(index)
        }
    })
    indexs.forEach(elem => {
        if (elem === 0) {
            newarr.unshift(-1);
        } else if (elem === arr.length - 1) {
            newarr.push(-1);
        } else {
            newarr = [...newarr.slice(0, elem), -1, ...newarr.slice(elem)]
        }
    })
    return newarr;
}

module.exports = {
    sortByHeight
};