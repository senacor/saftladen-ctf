/*
 * Copyright (c) 2016-2021 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

const Promise = require('bluebird')
const request = require('request-promise')
const isUrl = require('./url')

function fetchSecretKey (origin) {
  return new Promise((resolve, reject) => {
    if (origin && isUrl(origin)) {
      request(origin)
        .then(body => {
          resolve(body)
        }).catch(({ message }) => {
          reject(new Error('Failed to fetch secret key from URL! ' + message))
        })
    } else {
      resolve(origin)
    }
  })
}

module.exports = fetchSecretKey
