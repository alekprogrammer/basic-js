const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let arrOfDigits = String(n);
    let newstr = "";
    if (Number(arrOfDigits.slice(0, arrOfDigits.length - 1)) < Number(arrOfDigits.slice(1))) return Number(arrOfDigits.slice(1))
    for (let i = 0; i < arrOfDigits.length; i++) {
        arrOfDigits[i] = Number(arrOfDigits[i]);
    }
    let indexSmaller = arrOfDigits.indexOf(Math.min(...arrOfDigits))
    for (let i = 0; i < arrOfDigits.length; i++) {
        if (i !== indexSmaller) {
            newstr += arrOfDigits[i];
        }
    }
    return Number(newstr);
}

module.exports = {
    deleteDigit
};