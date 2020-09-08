const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) === 'string') {
    if(/[A-Za-z]/.test(sampleActivity)) {
      return false
    } else {
      if((Number(parseFloat(sampleActivity)) < 9000) && (Number(parseFloat(sampleActivity)) > 0)) {
        let k = 0.693 / HALF_LIFE_PERIOD
        let result = Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/k)
        if(result > 0) {
          return result
        } else {
          return false
        }
      } else {
        return false
      }
    }

} else {
    return false
}
};
