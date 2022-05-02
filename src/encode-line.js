const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    if (str == "") return "";
    let repeatedLetter = str[0];
    let count = 1;
    let newstr = ""
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== repeatedLetter) {
            newstr += count > 1 ? count + str[i - 1] : str[i - 1]
            repeatedLetter = str[i]
            count = 0;
            console.log(str[i])
        }
        count++;
    }
    newstr += count > 1 ? count + str[str.length - 1] : str[str.length - 1]
    return newstr;
}

module.exports = {
    encodeLine
};