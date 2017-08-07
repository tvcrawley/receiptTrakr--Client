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
  $('tbody').append(`<tr><td>${data.receipt.company}</td><td>${data.receipt.amount}</td><td>${data.receipt.purpose}</td><td>${data.receipt.product}</td></tr>`)
}

const receiptIndexSuccess = function (data) {
  console.log('data is ', data)
  userMessage('Receipt Index')
  $('tbody').empty()
  // loop through receipts to assign values to table
  const receipts = data.receipts
  $.each(receipts, function (i) {
    console.log('i receipts: ', data.receipts[i])
    $('tbody').append(`<tr><td>${data.receipts[i].company}</td><td>${data.receipts[i].amount}</td><td>${data.receipts[i].purpose}</td><td>${data.receipts[i].product}</td></tr>`)
  })
}

const receiptShowSuccess = function (data) {
  console.log('show data is ', data)
  userMessage('Receipt Show')
  // loop through receipts to assign values to table
  // const receipt = data.receipts
  $('tbody').append(`<tr><td>${data.receipt.company}</td><td>${data.receipt.amount}</td><td>${data.receipt.purpose}</td><td>${data.receipt.product}</td></tr>`)
}

const receiptUpdateSuccess = function (data) {
  console.log('update data is ', data)
  userMessage('Receipt Update')
  $('tbody').append(`<tr><td>${data.receipt.company}</td><td>${data.receipt.amount}</td><td>${data.receipt.purpose}</td><td>${data.receipt.product}</td></tr>`)
}

const receiptDestroySuccess = function (data) {
  console.log('destroy data is ', data)
  userMessage('Receipt Destroy')
  // remove receipt from table
}

const errorMessage = (error) => {
  console.error(error)
  userMessage('Error Occurred')
}

module.exports = {
  receiptCreateSuccess,
  receiptIndexSuccess,
  receiptShowSuccess,
  receiptUpdateSuccess,
  receiptDestroySuccess,
  errorMessage
}
