const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length
    },
    addLink(value) {
        if (value === undefined) {
            this.chain.push(`()`)
            return this;
        } else {
            this.chain.push(`( ${value} )`)
            return this;
        }
    },
    removeLink(position) {
        if (typeof position === "string" || position < 1 || position > this.chain.length) {
            throw new Error('You can\'t remove incorrect link!')
        }
        this.chain = [...this.chain.slice(0, position - 1), ...this.chain.slice(position)];
        return this;
    },
    reverseChain() {
        this.chain = this.chain.reverse()
        return this;
    },
    finishChain() {
        return this.chain.splice(0, this.chain.length).join("~~");
    }
};

module.exports = {
    chainMaker
};