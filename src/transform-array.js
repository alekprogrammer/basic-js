const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!(arr instanceof Array)) throw new Error("\'arr\' parameter must be an instance of the Array!");
    if (JSON.stringify(arr) == JSON.stringify([])) return [];
    let command = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "string" && arr[i].match(/\w/)) {
            command.push(arr[i]);
        }
    }
    if (command === []) return arr;
    let index;
    let newarr = [...arr];
    let r;
    for (let i = 0; i < command.length; i++) {
        switch (command[i]) {
            case "--discard-next":
                index = newarr.indexOf(command[i]);
                if (newarr[index + 2] === '--double-prev' || newarr[index + 2] === '--discard-prev') {
                    newarr = [...newarr.slice(0, index + 2), ...newarr.slice(index + 3)];
                    r = command.indexOf(arr[index + 2])
                    command = [...command.slice(0, r), ...command.slice(r + 1)];
                }
                if (index == newarr.length - 1) {
                    newarr = newarr.slice(0, index)
                    break;
                }
                newarr = [...newarr.slice(0, index), ...newarr.slice(index + 2)];
                break;
            case "--discard-prev":
                index = newarr.indexOf(command[i]);
                if (index == 0) {
                    newarr = newarr.slice(1)
                    break
                }
                newarr = [...newarr.slice(0, index - 1), ...newarr.slice(index + 1)]
                break;
            case "--double-next":
                index = newarr.indexOf(command[i]);
                if (index == newarr.length - 1) {
                    newarr = newarr.slice(0, index)
                    break;
                }
                newarr = [...newarr.slice(0, index), newarr[index + 1], ...newarr.slice(index + 1)]
                break;
            case "--double-prev":
                index = newarr.indexOf(command[i]);
                if (index == 0) {
                    newarr = newarr.slice(1)
                    break;
                }
                newarr = [...newarr.slice(0, index), newarr[index - 1], ...newarr.slice(index + 1)]
                break;
        }
    }
    return newarr;
}

module.exports = {
    transform
};