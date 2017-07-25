'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signUp(data)
  .done(ui.signUpSuccess)
  .fail(ui.errorMessage)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.errorMessage)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.errorMessage)
}

const onSignOut = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signOut(data)
  .done(ui.signOutSuccess)
  .fail(ui.errorMessage)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
