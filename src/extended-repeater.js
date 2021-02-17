const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options; 
  let result = [];
  str = String(str);
  addition = String(addition);
  repeatTimes = repeatTimes || 1;
  separator = separator || '+';
  additionSeparator = additionSeparator || '|';
  addition = addition !== undefined ? options.addition : '';
  additionRepeatTimes = additionRepeatTimes || 1;

  for(let i = 0; i < repeatTimes; i++) {
    result += str;
    if(addition !== undefined) {
      for(let k = 0; k < additionRepeatTimes; k++) {
        if(additionSeparator === undefined) {
          result += addition;
        } else {
          result += addition;
          if(k !== additionRepeatTimes - 1) {
            result += additionSeparator;
          } 
        }
      }
    } 
    
    if(i !== repeatTimes-1) {
      result += separator;
    }

  }
  return result;
};
