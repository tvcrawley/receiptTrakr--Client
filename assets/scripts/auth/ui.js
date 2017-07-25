'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('data is ', data)
}

const signUpError = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('data is ', data)
  store.user = data.user
}

const signInError = (error) => {
  console.error(error)
}

const changePasswordSuccess = () => {
  console.log('Password changed')
}

const changePasswordError = (error) => {
  console.error(error)
}

const signOutSuccess = () => {
  store.user = null
  console.log('store is ', store)
}

const signOutError = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError,
  signOutSuccess,
  signOutError
}
