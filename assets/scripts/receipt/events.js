'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onReceiptCreate = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(data)
  api.receiptCreate(data)
    .done(ui.receiptCreateSuccess)
    .fail(ui.errorMessage)
}

const onReceiptIndex = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(data)
  api.receiptIndex(data)
    .done(ui.receiptIndexSuccess)
    .fail(ui.errorMessage)
}

const addHandlers = () => {
  $('#receipt-create').on('submit', onReceiptCreate)
  $('#receipt-index').on('submit', onReceiptIndex)
}

module.exports = {
  addHandlers
}
