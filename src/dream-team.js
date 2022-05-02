const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!members) {
        return false;
    }
    let nameOfTeam = [];
    let currectValue;
    for (let i = 0; i < members.length; i++) {
        currectValue = members[i] && typeof members[i] === "string" && !members[i].match(/\d/) ? members[i].match(/[a-zA-Z]/)[0].toUpperCase() : "";
        nameOfTeam.push(currectValue);
    }
    nameOfTeam = nameOfTeam.sort(function(a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    })
    return nameOfTeam.join("");
}

module.exports = {
    createDreamTeam
};