const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    arr.forEach((element) => {
      let innerCounter = 1;
      if (Array.isArray(element)) {
        innerCounter += this.calculateDepth(element);
        if (innerCounter > counter) {
          counter = innerCounter;
        }
      }
    });

    return counter;
  }
};
