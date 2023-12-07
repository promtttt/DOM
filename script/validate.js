const setOfNumber = '0123456789'
const setOfLowerCase = 'abcdefghijklmnopqrstuvwxyz'
const setOfUpperCase = setOfLowerCase.toUpperCase()
const setOfSpecial = '$#%^&*()_+!'

const arrayOfNumber = [...setOfNumber]
const arrayOfLowerCase = [...setOfLowerCase]
const arrayOfUpperCase = [...setOfUpperCase]
const arrayOfSpecial = [...setOfSpecial]

function validateUsername(username) {
  const arrayOfUsername = [...username]
  return arrayOfUsername.some(char => arrayOfUpperCase.includes(char)) && 
  arrayOfUsername.some(char => arrayOfNumber.includes(char)) && 
  arrayOfUsername.length >= 5 &&
  !arrayOfUsername.some(char => arrayOfSpecial.includes(char))
}

function validateEmail(email) {
  return email.includes('@') && email.endsWith('.com')
}

function validatePassword(password) {
  const arrayOfPassword = [...password]
  return arrayOfPassword.some(char => arrayOfUpperCase.includes(char)) && 
  arrayOfPassword.some(char => arrayOfNumber.includes(char)) && 
  arrayOfPassword.length >= 8 &&
  arrayOfPassword.some(char => arrayOfSpecial.includes(char)) &&
  arrayOfPassword.some(char => arrayOfLowerCase.includes(char))
}

export { validateUsername, validateEmail,validatePassword }