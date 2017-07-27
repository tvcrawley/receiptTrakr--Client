'use strict'

const config = require('../config')
const store = require('../store')

const receiptCreate = (data) => {
  console.log('api data: ', data)
  return $.ajax({
    url: config.apiOrigin + '/receipts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  receiptCreate
}
