const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("Error");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        if (i === arr.length - 1) break;
        else {
          i++;
          continue;
        }
      case "--discard-prev":
        if (i === 0 || arr[i-2] === '--discard-next') continue;
        else {
          newArr.pop();
          break;
        }
      case "--double-next":
        if (i === arr.length - 1) continue;
        else {
          newArr.push(arr[i + 1]);
          continue;
        }
      case "--double-prev":
        if (i === 0 || arr[i - 2] === "--discard-next") continue;
        else {
          newArr.push(arr[i - 1]);
          continue;
        }
      default:
        newArr.push(arr[i]);
    }
  }
  return newArr;
};


