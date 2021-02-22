const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chains: [],
  getLength() {
      return this.chains.length;
  },
  addLink(value) {
    this.chains.push("( " + value + " )~~");    
    return this;
  },
  removeLink(position) {
    if(position < 0 || position >= this.getLength) {
      this.chains = [];
      throw new Error("ERROR!");      
    } else {
      this.chains.splice(position-1, 1);
    }    
    return this
  },
  reverseChain() {
    this.chains.reverse();
    return this
  },
  finishChain() {
    this.chains[this.chains.length-1] = this.chains[this.chains.length-1].substring(0, this.chains[this.chains.length-1].length -2)
    let result = this.chains.join("");
    this.chains = [];
    return result
  }
};

module.exports = chainMaker;