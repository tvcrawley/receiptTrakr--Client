'use strict'

const store = require('../store')

const appendUserMessage = function (message) {
  $('#message').append(message).hide().fadeIn('slow', function () {
    $(this).delay(1000).fadeOut('slow')
  })
}

const resetForm = function () {
  const form = $('form')
  $.each(form, function (i) {
    $('form')[i].reset()
  })
}

const userMessage = function (message) {
  if ($('#message').text().length === 0) {
    appendUserMessage(message)
    resetForm()
  } else {
    $('#message').contents().remove()
    appendUserMessage(message)
    resetForm()
  }
}

const signUpSuccess = function (data) {
  console.log('data is ', data)
  userMessage('Signed Up')
}

const signInSuccess = (data) => {
  console.log('data is ', data)
  store.user = data.user
  userMessage('Signed In')
}

const changePasswordSuccess = () => {
  console.log('Password changed')
  userMessage('Password Updated')
}

const signOutSuccess = () => {
  store.user = null
  console.log('store is ', store)
  userMessage('Signed Out')
}

const errorMessage = (error) => {
  console.error(error)
  userMessage('Error Occurred')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  errorMessage
}
