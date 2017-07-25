'use strict'

const signUpSuccess = (data) => {
  console.log('data is ', data)
}

const signUpError = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpError
}
