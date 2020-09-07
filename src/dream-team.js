const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let nameTeam = ''
  
  if(Array.isArray(members)) {
  for(let i = 0; i < members.length; i++) {
    if(typeof(members[i]) === 'string') {
      nameTeam += members[i].replace(/ +/g, ' ').trim().slice(0, 1).toUpperCase()
    } 
  } 
  return nameTeam.split('').sort().join('')
  } else {
    return false
  }

};
