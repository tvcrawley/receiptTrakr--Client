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

const receiptIndex = (data) => {
  console.log('api data: ', data)
  return $.ajax({
    url: config.apiOrigin + '/receipts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const receiptShow = (data) => {
  console.log('show api data: ', data)
  return $.ajax({
    url: config.apiOrigin + '/receipts/' + data.receipt.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const receiptUpdate = (data) => {
  console.log('update api data: ', data)
  return $.ajax({
    url: config.apiOrigin + '/receipts/' + data.receipt.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const receiptDestroy = (data) => {
  console.log('destroy api data: ', data)
  return $.ajax({
    url: config.apiOrigin + '/receipts/' + data.receipt.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  receiptCreate,
  receiptIndex,
  receiptShow,
  receiptUpdate,
  receiptDestroy
}
