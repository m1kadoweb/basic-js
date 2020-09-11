const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) { 
   
  if(Array.isArray(arr)) {
    if(arr.length != 0) {
      let newArr = []
      let tempArr = []

      for(let i = 0; i < arr.length; i++) {
        tempArr[i] = arr[i]
      }





      for(let i = 0; i < tempArr.length; i++) {
        switch(tempArr[i]) {          
          case '--discard-next':
            if(i === tempArr.length-1) {
              break
            } else {
              i = i + 1
              break
            }
          case '--discard-prev': 
            if(i === 0) {
              break;
            } else {
              k--
              newArr.pop()
              break
            }
            
          case '--double-next':
            if(i === tempArr.length-1) {
              break
            } else {
              newArr[k] = tempArr[i+1]
              k++
              break;
            }
          case '--double-prev':
            if(i === 0) {
              break
            } else {
              newArr[k] = tempArr[i-1]
              k++
              break
            }
          default:
              newArr[k] = tempArr[i]
              k++
              break            
        }

       }
       return newArr
    } else {
      return arr
    }
  } else {
    throw new 'THROWN'
  }
};
