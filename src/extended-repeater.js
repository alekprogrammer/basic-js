const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    if (options.separator == undefined) {
        options.separator = "+";
    }
    if (options.additionSeparator == undefined) {
        options.additionSeparator = '|';
    }
    str = String(str);
    additionStr = String(options.addition);
    let addition = [];
    for (let i = 0; i < options.additionRepeatTimes; i++) {
        addition.push(additionStr)
    }
    addition = addition.join(options.additionSeparator)
    let mainstr = str + addition;
    let newstr = [];
    for (let i = 0; i < options.repeatTimes; i++) {
        newstr.push(mainstr)
    }
    newstr = newstr.join(options.separator)
    return newstr;
}

module.exports = {
    repeater
};