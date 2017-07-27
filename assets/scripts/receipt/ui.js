'use strict'

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

const receiptCreateSuccess = function (data) {
  console.log('data is ', data)
  userMessage('Receipt Created')
}

const errorMessage = (error) => {
  console.error(error)
  userMessage('Error Occurred')
}

module.exports = {
  receiptCreateSuccess,
  errorMessage
}
