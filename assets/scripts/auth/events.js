'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signUp(data)
  .done(ui.signUpSuccess)
  .fail(ui.signUpError)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}
